CREATE PROCEDURE updateProject(
@username varchar(25)
,@projectname varchar (25)
,@projectid int
,@project_description varchar (255))
AS 
UPDATE project.project_list set 
	project_name = @projectname,
	project_description = @project_description
	WHERE project_name = @projectname

GO