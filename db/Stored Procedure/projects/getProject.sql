CREATE PROCEDURE getProject(
@projectname varchar (25))
AS 
BEGIN
SELECT * FROM project.project_list 
	WHERE project_name = @projectname 
END
GO