exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      apiKey: process.env.SERVER_API_KEY
    }),
  };
};
