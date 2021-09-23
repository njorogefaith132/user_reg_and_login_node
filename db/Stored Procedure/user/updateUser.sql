CREATE PROCEDURE updateUser(
@username varchar (25)
,@password varchar (100))
AS 
UPDATE users.users_list set 
	username = @username, password = @password
	WHERE username = @username

GO