// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const data = await fetch(`http://code1.cleancode.kr:8080/users`);
  const fix_data = await data.json()
  console.log(fix_data)
  res.status(200).json(fix_data)
}
