const conn = require("../config/db");
const Joi = require("joi");

module.exports = {
  create: async (req, res) => {
    const schema = Joi.object().keys({
      project_name: Joi.string().min(5).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const { project_name } = req.body;
    const { id } = req.user;
    conn.query("SELECT * FROM project.project_list where project_name = ? LIMIT 1",[project_name], async (err, result) =>{
        if(err){
            return res.status(400).json(err.message);
        }
        if(result[0]) return res.status(400).json({message:"Project already exists"})

            conn.query("INSERT INTO project.project_list (project_name, users_id) values (?,?)",
            [project_name, id],
            async (err, result) => {
                if (err) {
                return res.status(400).json(err.message);
                }

                conn.query(
                "SELECT * FROM project.project_list WHERE project_name = ?",
                [project_name],
                (err, result) => {
                    if (err) {
                    return res.status(400).json(err.message);
                    }
                    const project = result[0];

                    res.json({ project });
                }
                );
            }
        );
    })
  },

  getOne: (req, res) => {
    const { project_name } = req.params;
    conn.query(
      "SELECT * FROM project.project_list where project_name = ? LIMIT 1",
      [project_name],
      async (err, result) => {
        if (err) {
          console.log(err);
          return res.json(err.message);
        }
        res.json({ project: result[0] });
      }
    );
  },

  deleteProject: (req, res) => {
    const { project_name } = req.body;

    conn.query(
      "DELETE FROM project.project_list WHERE project_name=? ",
      [project_name],
      async (err, result) => {
        if (err) {
          console.log(err);
          return res.json(err.message);
        }
        res.json({ message: "Project deleted successfully" });
      }
    );
  },

  updateProject: async (req, res) => {
    const { id, project_name } = req.body;

    conn.query(
      "UPDATE project.project_list SET project_name = ? WHERE project_id = ? ",
      [project_name, id],
      async (err, result) => {
        if (err) {
          console.log(err);
          return res.json(err.message);
        }
        conn.query(
          "SELECT * FROM project.project_list WHERE project_name = ?",
          [project_name],
          (err, result) => {
            if (err) {
              return res.status(400).json(err.message);
            }

            res.json({
              message: "Project details updated successfully",
              project: result[0],
            });
          }
        );
      }
    );
  },
};
