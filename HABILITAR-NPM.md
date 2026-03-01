# Solución al error de npm en PowerShell

Si ves *"la ejecución de scripts está deshabilitada"* al usar `npm`, tienes estas opciones:

## Opción 1: Usar los archivos .cmd (recomendado)

En la carpeta del proyecto hay dos archivos:

- **`install.cmd`** — doble clic o ejecutar para instalar dependencias.
- **`dev.cmd`** — doble clic o ejecutar para levantar el servidor (http://localhost:3000).

Desde PowerShell también puedes ejecutarlos:

```powershell
.\install.cmd
.\dev.cmd
```

## Opción 2: Usar Símbolo del sistema (CMD)

Abre **Símbolo del sistema** (cmd.exe), ve a la carpeta del proyecto y ejecuta:

```cmd
cd C:\Users\IVAN\agrinegocio
npm install
npm run dev
```

En CMD no aplica la política de scripts de PowerShell, así que `npm` funciona normal.

## Opción 3: Habilitar scripts en PowerShell

Si quieres usar `npm` directamente en PowerShell, abre PowerShell **como Administrador** y ejecuta:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```

Luego cierra y abre de nuevo PowerShell.
