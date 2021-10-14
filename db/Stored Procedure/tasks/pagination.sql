CREATE PROCEDURE paginateTasks
AS
DECLARE @pagenumber AS INT
DECLARE @rowsperpage AS INT
DECLARE @maxpage AS FLOAT

SET @pagenumber = 1
SET @rowsperpage= 1

SELECT @maxpage = COUNT(*) FROM project.tasks
SET @maxpage = CEILING(@maxpage/@rowsperpage)

WHILE @maxpage >= @pagenumber
BEGIN
	SELECT project_name, task,start_date,end_date FROM project.tasks WHERE isdeleted = 0
	ORDER BY task
	OFFSET (@pagenumber -1)*@rowsperpage ROWS
	FETCH NEXT @rowsperpage ROWS ONLY
	FOR JSON AUTO , WITHOUT_ARRAY_WRAPPER
SET @pagenumber = @pagenumber+1
END