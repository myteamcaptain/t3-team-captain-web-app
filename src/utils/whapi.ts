export function whapiErrorMsgFn(status: 200 | 400 | 402 | 404 | 500) {
  switch (status) {
    case 200: {
      return {
        message: "Whatsapp number is correct",
      };
    }
    case 400: {
      return {
        message: "Whatsapp number is incorrect. Please try again!",
      };
    }
    case 402: {
      return {
        message: "Sorry. Can't use as of the moment!",
      };
    }
    case 404: {
      return {
        message: "Whatsapp number is not registered",
      };
    }
    case 500: {
      return {
        message: "There was an error encountered!",
      };
    }
  }
}
