import axios from "axios";
import toastr from "toastr";

const baseUrl = "localhost:5000/";
export default class ApiService {
  constructor(serviceName) {
    this.serviceName = serviceName;
    if (serviceName != null && serviceName !== undefined) {
      this.url = baseUrl + this.serviceName + "/";
    } else {
      this.url = baseUrl;
    }
  }

  async getAll(filter = {}, sub = "") {
    let params = {
      params: filter
    };
    return axios
      .get(this.url + sub, params)
      .then(response => response.data)
      .catch(err => {
        console.log(err);
        toastr.error("Falha ao carregar os dados");
      });
  }

  async getById(id, sub = "") {
    return new Promise((resolve, reject) => {
      axios
        .get(this.url + sub + id)
        .then(res => resolve(res.data))
        .catch(err => {
          reject(err.response);
          toastr.error("Erro!", err.response);
        });
    });
  }

  async create(newObject = {}, sub = "") {
    return new Promise((resolve, reject) => {
      axios
        .post(this.url + sub, newObject)
        .then(res => {
          resolve(res.data);
          toastr.success("Cadastro realizado com sucesso!!");
        })
        .catch(err => {
          reject(err.response);
          toastr.error("Erro ao cadastrar!!");
        });
    });
  }

  async update(newObject, id, sub = "") {
    return new Promise((resolve, reject) => {
      axios
        .put(this.url + sub + id, newObject)
        .then(res => {
          resolve(res.data);
          toastr.success("Atualização realizada com sucesso!!");
        })
        .catch(err => {
          reject(err.response);
          toastr.error("Erro ao atualizar");
        });
    });
  }

  async delete(id, sub = "") {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.url + sub + id)
        .then(res => {
          resolve(res.data);
          toastr.success("registro deletado com sucesso!!");
        })
        .catch(err => {
          // if (err.response.data) {
          // toastr.error(err.response.data)
          // } else {
          toastr.error("falha ao deletar!!");
          // }
          reject(err.response);
        });
    });
  }
}
