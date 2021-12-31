import ApiService from "./api.service";

abstract class ResourceService<Resource>{

  abstract resource: { new(...args: any): Resource };
  abstract path: string;

  query(params?: any): Promise<Resource[]> {
    return ApiService.get(this.path, params).then(data => {
      return data.map((item: any) => new this.resource(item));
    });
  }

  get(slug: string, params?: any): Promise<Resource> {
    return ApiService.get(`${this.path}/${slug}`, params).then(data => {
      return new this.resource(data);
    });
  }

  post(data?: any) {
    return ApiService.post(this.path, data);
  }

  put(data?: any) {
    return ApiService.put(this.path, data);
  }

  delete(data?: any) {
    return ApiService.delete(this.path, data);
  }

}

export default ResourceService;