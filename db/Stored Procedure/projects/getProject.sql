CREATE PROCEDURE getProject(
@projectname varchar (25))
AS 
SELECT * FROM project.project_list 
	WHERE project_name = @projectname 

GO