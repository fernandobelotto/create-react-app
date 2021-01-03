---
id: using-https-in-development
title: Usando HTTPS em desenvolvimento
sidebar_label: HTTPS em desenvolvimento
---

> Nota: este recurso está disponível com `react-scripts@0.4.0` e superior.

Você pode exigir que o servidor dev sirva páginas sobre HTTPS. Um caso particular em que isso pode ser útil é ao usar [o recurso "proxy"](proxying-api-requests-in-development.md) para enviar solicitações a um servidor API quando esse servidor API está servindo HTTPS.

Para fazer isso, defina a variável de ambiente `HTTPS` como `true`, em seguida, inicie o servidor de desenvolvimento normalmente com `npm start`:

### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```
(Observação: a falta de espaço em branco é intencional.)

### Windows (Powershell)

```Powershell
($env:HTTPS = "true") -and (npm start)
```

### Linux, macOS (Bash)

```sh
HTTPS=true npm start
```
Observe que o servidor usará um certificado autoassinado, então seu navegador quase definitivamente exibirá um aviso ao acessar a página.

## Certificado SSL personalizado

Para definir um certificado personalizado, defina as variáveis ​​de ambiente `SSL_CRT_FILE` e `SSL_KEY_FILE` para o caminho do certificado e dos arquivos de chave da mesma forma que você fez para `HTTPS` acima. Observe que você também precisará definir `HTTPS=true`.

### Linux, macOS (Bash)

```bash
HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start
```
Para evitar ter que definir a variável de ambiente todas as vezes, você pode incluir no script `npm start` assim:

```json
{
  "start": "HTTPS=true react-scripts start"
}
```

Ou você pode criar um arquivo `.env` com `HTTPS = true` definido.
[Saiba mais sobre variáveis ​​de ambiente em CRA](https://create-react-app.dev/docs/adding-custom-environment-variables).
