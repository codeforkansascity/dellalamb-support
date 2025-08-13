# Dockerfile
FROM golang:1.23

WORKDIR /app
COPY . .

RUN go mod tidy
RUN go build -o dellalamb-support .

EXPOSE 3000
CMD ["./dellalamb-support"]
