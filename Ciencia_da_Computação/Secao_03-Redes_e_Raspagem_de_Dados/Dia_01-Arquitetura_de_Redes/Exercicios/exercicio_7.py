from socketserver import UDPServer, DatagramRequestHandler


class UDPHandle(DatagramRequestHandler):
    def handle(self):
        self.wfile.write(b'Ola, cliente\n')
        data = self.rfile.readline().strip().decode("UTF-8")
        self.wfile.write(bytes(f"{data}\n", "UTF-8"))
        print(data)


if __name__ == '__main__':
    server_address = ("localhost", 8084)
    with UDPServer(server_address, UDPHandle) as server:
        print("Server ON")
        server.serve_forever()
