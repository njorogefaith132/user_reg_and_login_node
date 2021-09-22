CREATE PROCEDURE postUsers(
@username varchar (25)
,@password varchar (100)
,@project_name varchar (200))
AS 
INSERT into users.user_list 
(username, password, project_name)
VALUES
(@username, @password, @project_name)

GO