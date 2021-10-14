ALTER PROCEDURE deleteUser(
@username varchar (25))
AS 
BEGIN
UPDATE users.users_list SET isdeleted = 1
	WHERE username = @username 
END
GO