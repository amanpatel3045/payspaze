export const mockSendPayment = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (data.to) {
          case 'success@example.com':
            resolve({ status: 200, data: { message: 'Payment successful' } });
            break;
          case 'badrequest@example.com':
            reject({ status: 400, message: 'Bad Request: Invalid data' });
            break;
          case 'unauthorized@example.com':
            reject({ status: 401, message: 'Unauthorized: Please login' });
            break;
          default:
            reject({ status: 500, message: 'Server error. Try again later.' });
        }
      }, 1500);
    });
  };
  