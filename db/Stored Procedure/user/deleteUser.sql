CREATE PROCEDURE deleteUser(
@username varchar (25))
AS 
DELETE FROM users.users_list 
	WHERE username = @username 
GO