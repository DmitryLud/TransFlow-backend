import ClientService from "../services/ClientService.js";

class ClientController {
  async create(req, res) {
    try {
      const client = await ClientService.create(req.body);
      res.json(client);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const clients = await ClientService.getAll();
      return res.json(clients);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const client = await ClientService.getOne(req.params.id);
      return res.json(client);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedClient = await ClientService.update(req.body);
      return res.json(updatedClient);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const client = await ClientService.delete(req.params.id);
      return res.json(client);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new ClientController();
