CREATE PROCEDURE deleteProject(
@projectname varchar (25))
AS 
BEGIN
DELETE FROM project.project_list 
	WHERE project_name = @projectname 
END
GO