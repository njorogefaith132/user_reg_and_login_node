ALTER PROCEDURE deleteProject(
@projectname varchar (25))
AS
BEGIN 
UPDATE project.project_list SET isdeleted = 1
	WHERE project_name = @projectname
END
GO