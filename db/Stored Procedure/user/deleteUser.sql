CREATE PROCEDURE deleteUser(
@username varchar (25))
AS 
BEGIN
DELETE FROM users.users_list 
	WHERE username = @username 
END
GO