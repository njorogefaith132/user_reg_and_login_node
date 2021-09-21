CREATE PROCEDURE updateUser(
@username varchar (25)
,@password varchar (25))
AS 
UPDATE users.user_list set 
	username = @username, password = @password
	WHERE username = @username

GO