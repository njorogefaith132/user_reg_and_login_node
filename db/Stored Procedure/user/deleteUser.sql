CREATE PROCEDURE deleteUser(
@username varchar (25))
AS 
DELETE FROM users.user_list 
	WHERE username = @username 
GO