
export function showSnackbar(enqueueSnackbar, data, onSuccess = () => {}) {
    data.message &&
      enqueueSnackbar(data.message, {
        variant: data.success ? "success" : "error",
      });
    data.success && onSuccess();
  }