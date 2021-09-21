CREATE PROCEDURE getUser(
@username varchar (25)
,@password varchar (25))
AS 
SELECT * FROM users.user_list 
	WHERE username = @username AND password = @password 

GO