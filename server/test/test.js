import prisma from "../utils/db.js";

async function main() {
  await prisma.roomImage.createMany({
    data: [
      {
        roomTypeId: 1,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187344/neatlyhotelimage/thpzuvtoeu6sf1ghcty1.jpg",
      },
      {
        roomTypeId: 1,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187344/neatlyhotelimage/rrrb4kspchxpf9v6zhqs.jpg",
      },
      {
        roomTypeId: 1,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187344/neatlyhotelimage/ihv7qiko98oovx7kw5bm.jpg",
      },
      {
        roomTypeId: 1,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187344/neatlyhotelimage/i97c48q962xemwsgj4y3.jpg",
      },
      {
        roomTypeId: 1,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187344/neatlyhotelimage/by8pfghf66kkzg7snpbb.jpg",
      },
      {
        roomTypeId: 1,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187344/neatlyhotelimage/fuiuu4pi4hvoqdt6ftq1.jpg",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187342/neatlyhotelimage/pttpvtqwb4ku22ks9bm4.jpg",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187342/neatlyhotelimage/sxh3lvierqg4swmjoyeb.jpg",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187342/neatlyhotelimage/nmdouy7k6wthz6mfsps7.jpg",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187343/neatlyhotelimage/job3ndczvgpbtm99ldlx.jpg",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187343/neatlyhotelimage/gfgproxmkf8pptbamy10.jpg",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187343/neatlyhotelimage/n1pn9pyxj9vuh0bueyp7.jpg",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187342/neatlyhotelimage/vgvmfdhb1i1liovnhpqh.png",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187343/neatlyhotelimage/wtm0h4fpwmleprmujmtp.png",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187343/neatlyhotelimage/ydfz3wvtzu0y49apdj8p.png",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187343/neatlyhotelimage/b5d78jbuii18mimhjwg2.png",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187343/neatlyhotelimage/pu4jyh5uexvqgu14wfuh.png",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187339/neatlyhotelimage/qjbyyl5we6yifauatvhx.png",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709190764/neatlyhotelimage/brgmkourldasl8ioz9fa.jpg",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187345/neatlyhotelimage/nlwm40lusvrfppw1u5p5.jpg",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187338/neatlyhotelimage/wvx7ymy7prchtd4zvm0f.jpg",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187345/neatlyhotelimage/l3eszf6leibojhnumvhs.jpg",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187338/neatlyhotelimage/b1s28syxquyhnkh6dimj.jpg",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187339/neatlyhotelimage/nfnjol4sjfvbkpysjjms.jpg",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187339/neatlyhotelimage/xb8fujonobymhkanfaxy.jpg",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187340/neatlyhotelimage/gm060jxrs6j4bvjw06v5.jpg",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187340/neatlyhotelimage/befwz6zxuhrqludoppsk.jpg",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187340/neatlyhotelimage/oggrkvcncvd75esakwii.jpg",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187341/neatlyhotelimage/if6icbayrszlqte0drmz.jpg",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187341/neatlyhotelimage/bpqhxjkasqgiczvynnnz.jpg",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187339/neatlyhotelimage/hl2vlqxbgp10odxr55st.jpg",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187340/neatlyhotelimage/zezk9qziim9gtjzriyqi.jpg",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187340/neatlyhotelimage/edmknsdo1jybbnb8mnww.jpg",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187340/neatlyhotelimage/t5bzk3tvpsmhuu0yjdju.jpg",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187341/neatlyhotelimage/laj8pd7plxrds5dn7fwo.jpg",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://res.cloudinary.com/df3vpzreu/image/upload/v1709187341/neatlyhotelimage/xziqvnuqbb6cj6ulctdq.jpg",
      },
    ],
  });
  console.log("Batch insert is completed.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
