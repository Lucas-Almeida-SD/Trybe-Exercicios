from socketserver import TCPServer, StreamRequestHandler


class TCPHandle(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola client\n")
        print("Cliente conectado")
        while True:
            data = self.rfile.readline().strip().decode('UTF-8')
            self.wfile.write(bytes(f"{data}\n", "UTF-8"))
            if not data:
                self.wfile.write(b'Cliente desconectado\n')
                print('Cliente desconectado')
                break
            print(data)


if __name__ == "__main__":
    server_address = ("localhost", 8085)
    with TCPServer(server_address, TCPHandle) as server:
        print("Server ON")
        server.serve_forever()
