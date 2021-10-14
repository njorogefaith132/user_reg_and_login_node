CREATE PROCEDURE getUser(
@username varchar (25)
,@password varchar (100))
AS 
BEGIN
SELECT * FROM users.users_list 
	WHERE isdeleted = 0 AND username = @username AND password = @password 
END
GO