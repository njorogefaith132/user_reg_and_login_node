CREATE PROCEDURE deleteProject(
@projectname varchar (25))
AS 
DELETE FROM project.project_list 
	WHERE project_name = @projectname 
GO