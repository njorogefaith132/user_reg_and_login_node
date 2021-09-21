CREATE PROCEDURE createProject(
@projectname varchar (25)
,@username  varchar (25)
,@project_description varchar (200))
AS 
INSERT into project.projects_list 
(project_name, username, project_description, date_posted)
VALUES
(@projectname, @username, @project_description,  CAST(GETDATE() AS DATE) )

GO