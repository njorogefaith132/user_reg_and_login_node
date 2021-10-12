CREATE PROCEDURE getusername (
@username varchar(50)
)
AS 
BEGIN
SELECT * FROM users.users_list WHERE username = @username
END