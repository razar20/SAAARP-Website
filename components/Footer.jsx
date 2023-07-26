// import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer class="w-full  flex items-center justify-center ">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div class="flex flex-col">
          <div class="flex mt-24 mb-12 flex-row justify-between">
            <div class="">
              <img src="logo.png" alt="logo" class="w-40 object-contain" />
            </div>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              About
            </a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Services
            </a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Why us
            </a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Contact
            </a>
            <div class="flex flex-row space-x-8 items-center justify-between">
              <a>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z"
                    fill="white"
                  />
                  <path
                    d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z"
                    fill="white"
                  />
                  <path
                    d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                {/* <TwitterIcon /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 256 256"
                  width="14"
                  height="15"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M42,12.429c-1.323,0.586 -2.746,0.977 -4.247,1.162c1.526,-0.906 2.7,-2.351 3.251,-4.058c-1.428,0.837 -3.01,1.452 -4.693,1.776c-1.344,-1.425 -3.261,-2.309 -5.385,-2.309c-4.08,0 -7.387,3.278 -7.387,7.32c0,0.572 0.067,1.129 0.193,1.67c-6.138,-0.308 -11.582,-3.226 -15.224,-7.654c-0.64,1.082 -1,2.349 -1,3.686c0,2.541 1.301,4.778 3.285,6.096c-1.211,-0.037 -2.351,-0.374 -3.349,-0.914c0,0.022 0,0.055 0,0.086c0,3.551 2.547,6.508 5.923,7.181c-0.617,0.169 -1.269,0.263 -1.941,0.263c-0.477,0 -0.942,-0.054 -1.392,-0.135c0.94,2.902 3.667,5.023 6.898,5.086c-2.528,1.96 -5.712,3.134 -9.174,3.134c-0.598,0 -1.183,-0.034 -1.761,-0.104c3.271,2.071 7.155,3.285 11.324,3.285c13.585,0 21.017,-11.156 21.017,-20.834c0,-0.317 -0.01,-0.633 -0.025,-0.945c1.45,-1.024 2.7,-2.316 3.687,-3.792"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <hr class="border-white" />
          <p class="w-full text-center my-12 hover:text-white text-gray-600">
            Copyright © 2023 — SAAARP LABS - dApps for community, Powered by
            DeFi, NFTs and Web3.0. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
