{
  // 
  // works
  // 
  $.ajax({
    url: "http://click.ecc.ac.jp/ecc/msatou/p_test/js/products.php",
    method: "GET",
    dataType: "json",
    timeout: 3000,
    cache: false,
  }).done(function (res) {
    const data = (products, num) => {
      for (let i = 0; i < products.length; i++) {
        //
        // index
        //
        const data = `<div class="index__works--data"></div>`;
        // 各データの箱
        $(`.index__works--bg:nth-child(${num})`).append(data);
        // →追加
        const dataWrap = $(
          `.index__works--bg:nth-child(${num}) .index__works--data:nth-child(${
            i + 1
          }`
        );
        // →取得
        const ttlData = products[i].title;
        const thumbnailData = products[i].thumbnail;
        const thumbnail = `<div class="index__works--thumbnail"><img src="img/${thumbnailData}" alt="${ttlData}"></div>`;
        //サムネイルデータ
        const txt = `<div class="index__works--txt"></div>`;
        //テキストデータ
        const captionData = products[i].caption;
        const ttl = `<div class="index__works--ttl">${ttlData}</div>`;
        const caption = `<div class="index__works--caption">${captionData}</div>`;
        const btn = `<button class="index__works--btn"><span>read more</span></button>`;
        // テキストデータ内他データ取得
        dataWrap.append(txt, thumbnail);
        const txtWrap = $(
          `.index__works--bg:nth-child(${num}) .index__works--data:nth-child(${
            i + 1
          })>.index__works--txt`
        );
        // テキストデータ取得
        txtWrap.append(caption, ttl, btn);
        // 他データ追加
      }
    };
    data(res.university, 1);
    data(res.personal, 2);

    const worksData = document.querySelectorAll(".index__works--data");
    for (let i = 0; i < worksData.length; i++) {
      worksData[i].classList.add("index__add");
      window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;
        let height = worksData[i].getBoundingClientRect().top;
        let elHeight = scrollY + height;
        if (scrollY > elHeight - 500) {
          worksData[i].style.transform = "translateY(0)";
          worksData[i].style.opacity = "1";
          worksData[i].style.transition = "1s opacity,0.8s transform";
        }
      });
    }

    const modalWindow = (products, num) => {
      //
      // モーダルウィンドウ
      //
      const modalBtn = $(
        `.index__works--bg:nth-child(${num}) .index__works--btn`
      );
      for (let i = 0; i < modalBtn.length; i++) {
        // モーダルの箱
        modalBtn[i].addEventListener("click", () => {
          // 箱作る
          const modal = `<div class="index__modal"></div>`;
          const modalData = `<div class="index__modal--data"></div>`;
          const imgWrap = `<div class="index__modal--img"></div>`;
          const modalBg = `<div class="index__modal--bg"></div>`;
          const modalBack = `<button class="index__modal--btn"><span>back</span></button>`;
          $("main").append(modal, modalBg);
          const modalWrap = $(".index__modal");
          const modalBgWrap = $(".index__modal--bg");
          modalWrap.append(modalData, imgWrap, modalBack);
          const modalDataWrap = $(".index__modal--data");
          const imgDataWrap = $(".index__modal--img");
          // 箱の中身
          const modalBtn = document.querySelector(".index__modal--btn"); //モーダル消去用ボタン
          const ttlData = products[i].title;
          const captionData = products[i].caption;
          const txtData = products[i].txt;
          const imgData = products[i].img;
          const ttl = `<div class="index__works--ttl">${ttlData}</div>`;
          const caption = `<div class="index__works--caption">${captionData}</div>`;
          const txt = `<div class="index__works--txt">${txtData}</div>`;
          for (let i2 = 0; i2 < imgData.length; i2++) {
            const img = `<img src="img/${imgData[i]}" alt="${ttlData}">`;
            imgDataWrap.append(img);
          }
          modalDataWrap.append(caption, ttl, txt);
          modalBtn.addEventListener("click", () => {
            modalWrap.remove();
            modalBgWrap.remove();
          });
        });
      }
    };
    modalWindow(res.university, 1);
    modalWindow(res.personal, 2);
    //
    // works背景文字
    //
    const bgTxtData = ["at University", "by Myself"];
    for (let i = 0; i < bgTxtData.length; i++) {
      const bgTxtWrap = `<div class="index__works--bgTxt">${bgTxtData[i]}</div>`;
      $(`.index__works--bg:nth-child(${i + 1})`).append(bgTxtWrap);
    }
  });

  //
  // 背景設定
  //
  const indexContents = $("main>*");
  let contentsHeight = 0;
  for (let i = 0; i < indexContents.length; i++) {
    contentsHeight = parseInt(contentsHeight + indexContents[i].offsetHeight);
  }
  const pageY = window.innerHeight;
  let footHeight = contentsHeight - pageY;
  const mainImg = "main.png";
  const footImg = "foot.png";
  const bg_main = `<div class="index__main--bg"><img src="img/${mainImg}"></div>`;
  const bg_foot = `<div class="index__foot--bg"><img src="img/${footImg}"></div>`;
  $("main").append(bg_main);
  $("main").append(bg_foot);
  const main = document.querySelector(".index__main--bg");
  const foot = document.querySelector(".index__foot--bg");
  // const nav = document.querySelectorAll("nav a");
  window.addEventListener("load", () => {
    main.classList.add("bgAdd");
  });
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    if (scrollY < pageY) {
      main.classList.add("bgAdd");
    }
    if (scrollY > footHeight) {
      foot.classList.add("bgAdd");
    }
    if (scrollY > pageY && scrollY < footHeight) {
      if (
        main.classList.contains("bgAdd") ||
        foot.classList.contains("bgAdd")
      ) {
        document.querySelector(".bgAdd").classList.remove("bgAdd");
      }
    }
  });

  // 
  // フェードイン
  // 
  const fadeIn = (wrap, num) => {
    const el = document.querySelector(wrap);
		el.classList.add("index__add");
    window.addEventListener("scroll", () => {
      let scrollY = window.pageYOffset;
      let height = el.getBoundingClientRect().top;
      let elHeight = scrollY + height;
      if (scrollY > elHeight - num) {
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
        el.style.transition = "1s opacity,0.8s transform";
      }
    });
  };
  const fadeIn2 = (wrap, num) => {
    const el = document.querySelector(wrap);
		el.classList.add("index__add");
    window.addEventListener("scroll", () => {
      let scrollY = window.pageYOffset;
      let height = el.getBoundingClientRect().top;
      let elHeight = scrollY + height;
      if (scrollY > elHeight - num) {
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
        el.style.transition = "1s opacity,0.8s transform";
      }
    });
  };
  fadeIn(".index__intro--movie", 700);
  fadeIn(".index__about--txt", 700);
  fadeIn(".index__contact", 400);

}
