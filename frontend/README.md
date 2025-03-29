## Install PNPM
Check Install PNPM, the process should be similar.

Almost there, we can now install all the Node.js dependencies of the frontend app:
```
cd frontend
pnpm install --frozen-lockfile
```

You can now start rotki, still from the frontend directory:

pnpm run dev

## Packaging
To package the application for your platform you need to run the packaging script. To do so you need to make sure that packaging and requests are installed in your virtual environment
```
pip3 install packaging requests
./package.py --build full
```
> Note: if you are using an Apple Silicon mac to package rotki, you might come across the following error during the SQLCipher verification step. ImportError: dlopen(/…/lib/python3.9/site-packages/pysqlcipher3/_sqlite3.cpython-39-darwin.so, 0x0002): symbol not found in flat namespace (_ERR_error_string) This is a known problem that does not affect the final binary. You can use `SKIP_SQLCIPHER_VERIFICATION ./package.py` to build while skipping the verification step.