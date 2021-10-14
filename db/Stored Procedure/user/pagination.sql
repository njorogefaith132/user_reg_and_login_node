CREATE PROCEDURE paginateUsers
AS
DECLARE @pagenumber AS INT
DECLARE @rowsperpage AS INT
DECLARE @maxpage AS FLOAT

SET @pagenumber = 1
SET @rowsperpage= 5

SELECT @maxpage = COUNT(*) FROM users.users_list
SET @maxpage = CEILING(@maxpage/@rowsperpage)

WHILE @maxpage >= @pagenumber
BEGIN
	SELECT username FROM users.users_list WHERE isdeleted = 0
	ORDER BY username
	OFFSET (@pagenumber -1)*@rowsperpage ROWS
	FETCH NEXT @rowsperpage ROWS ONLY
	FOR JSON AUTO , WITHOUT_ARRAY_WRAPPER
SET @pagenumber = @pagenumber+1
END