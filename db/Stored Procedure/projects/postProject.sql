CREATE PROCEDURE createProject(
@projectname varchar (25)
,@username  varchar (25)
,@project_description varchar (200))
AS 
BEGIN
INSERT into project.project_list 
(project_name, username, project_description, date_posted)
VALUES
(@projectname, @username, @project_description,  CAST(GETDATE() AS DATE) )


SELECT * from project.project_list WHERE project_name = @projectname
END

GO