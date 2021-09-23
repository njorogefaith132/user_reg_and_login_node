CREATE PROCEDURE getUser(
@username varchar (25)
,@password varchar (100))
AS 
SELECT * FROM users.users_list 
	WHERE username = @username AND password = @password 

GO