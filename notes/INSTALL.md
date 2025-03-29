https://rotki.readthedocs.io/en/latest/installation_guide.html#id14

## Installation via PNPM

Check here to install [PNPM](https://rotki.readthedocs.io/en/latest/installation_guide.html#install-pnpm)

**Install Dependencies**

```
cd frontend
pnpm install --frozen-lockfile
```

Start Roki from the frontend directory
```
pnpm run dev
```



## Python Installation

1. Get [python 3.11](https://www.python.org/downloads/release/python-3117/) (3.11 is required due to some rotki dependencies). Make sure to download the 64-bit version of python if your version of Windows is 64-bit! If you’re unsure of what Windows version you have, you can check in Control Panel -> System and Security -> System.

2. For some reason python does not always install to the Path variable in Windows. 

To ensure you have the necessary python directories referenced, go to Control Panel -> System -> Advanced system settings -> Advanced (tab) -> Environment Variables… In the Environment Variables… dialog under “System Variables” open the “Path” variable and ensure that both the root python directory as well as the `\Scripts\` subdirectory are included. If they are not, add them one by one by clicking “New” and then “Browse” and locating the correct directories. 

> **NOTE**: By default the Windows MSI installer place python in the `C:\Users\<username>\AppData\Local\Programs\ directory`.

3. To test if you have entered python correctly into the Path variable, open a command prompt and type in python then hit Enter. The `python` cli should run and you should see the python version you installed depicted above the prompt. Press CTRL+Z, then Enter to exit.