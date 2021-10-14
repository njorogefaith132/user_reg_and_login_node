CREATE PROCEDURE getAllUsers
AS 
BEGIN
SELECT * FROM users.users_list WHERE isdeleted = 0
END


--- Pagination
