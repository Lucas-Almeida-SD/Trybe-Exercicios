import ICepAPI from "./ICepAPI";


class MockCepApi implements ICepAPI {
  async getAddressByCEP(cep: string = 'xx.xxx-xx',number: number = 10): Promise<string> {
      return `MockCepApi: O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `MockCepApi: O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}
export default MockCepApi;