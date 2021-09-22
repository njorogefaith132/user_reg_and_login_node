CREATE PROCEDURE postUsers(
@username varchar (25)
,@password varchar (100))
AS 
INSERT into users.user_list 
(username, password)
VALUES
(@username, @password)

GO