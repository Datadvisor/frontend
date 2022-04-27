import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Forgot() {
    return(
        <div className="bg-gray-100 relative mx-auto h-full flex flex-row">
            <div className="p-12 2xl:w-3/12 h-screen bg-white rounded-lg shadow-md lg:shadow-lg">
            <Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" width={70} height={70} />
            <h1 className="text-2xl font-bold">Reset your Password</h1>
            <div className="text-xs text-gray-400">clean your data accross the web</div>
            <form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="">E-mail</div>
                    <input placeholder="E-mail" 
                        className="block w-full py-3 px-3 mt-2
                        text-gray-800 appearance-none
                        border-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-600 rounded-xl"
                    ></input>
                </div>
                <button type="submit"
                className=" whitespace-nowrap justify-center px-20 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-505"
                >RESET YOUR PASSWORD</button>
            </form>
            <a>go back to login</a>
            </div>
            <div className="p-60">
                <svg width="737" height="450" viewBox="0 0 737 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M274.632 446.399C391.013 446.399 485.358 347.647 485.358 225.831C485.358 104.015 391.013 5.26404 274.632 5.26404C158.251 5.26404 63.9052 104.015 63.9052 225.831C63.9052 347.647 158.251 446.399 274.632 446.399Z" fill="#D9EBFF"/>
                <path d="M600.657 194.165C651.883 194.165 693.409 150.7 693.409 97.0827C693.409 43.4654 651.883 0 600.657 0C549.432 0 507.906 43.4654 507.906 97.0827C507.906 150.7 549.432 194.165 600.657 194.165Z" fill="#D9EBFF"/>
                <path d="M648.678 369.674C648.218 369.674 647.778 369.483 647.453 369.143C647.128 368.802 646.945 368.341 646.945 367.86V212.244H592.111C591.652 212.244 591.211 212.053 590.886 211.713C590.561 211.373 590.378 210.912 590.378 210.431V91.5582H217.248V141.784C217.248 142.265 217.065 142.727 216.74 143.067C216.415 143.407 215.975 143.598 215.515 143.598H98.4558V231.544H125.801C126.261 231.544 126.701 231.736 127.026 232.076C127.351 232.416 127.534 232.877 127.534 233.358V252.683C127.534 253.164 127.351 253.625 127.026 253.966C126.701 254.306 126.261 254.497 125.801 254.497C125.341 254.497 124.901 254.306 124.576 253.966C124.251 253.625 124.068 253.164 124.068 252.683V235.172H96.7228C96.2633 235.172 95.8225 234.981 95.4976 234.641C95.1726 234.301 94.99 233.839 94.9899 233.358V141.784C94.99 141.303 95.1726 140.842 95.4976 140.502C95.8225 140.162 96.2633 139.971 96.7228 139.97H213.782V89.7443C213.782 89.2633 213.965 88.802 214.29 88.4618C214.615 88.1217 215.056 87.9305 215.515 87.9304H592.111C592.571 87.9305 593.012 88.1217 593.337 88.4618C593.662 88.802 593.844 89.2633 593.844 89.7443V208.617H648.678C649.137 208.617 649.578 208.808 649.903 209.148C650.228 209.488 650.411 209.949 650.411 210.431V367.86C650.411 368.341 650.228 368.802 649.903 369.143C649.578 369.483 649.137 369.674 648.678 369.674Z" fill="#A9C0FF"/>
                <path d="M458.574 24.6237V156.443C458.574 157.006 458.469 157.565 458.262 158.086C458.056 158.607 457.754 159.08 457.373 159.479C456.992 159.878 456.54 160.194 456.042 160.41C455.544 160.625 455.011 160.736 454.472 160.736H327.94C326.853 160.733 325.812 160.28 325.043 159.475C324.274 158.671 323.841 157.58 323.838 156.443V6.35371C323.838 5.7898 323.944 5.23137 324.15 4.71035C324.356 4.18933 324.658 3.71592 325.039 3.31717C325.42 2.91843 325.872 2.60216 326.37 2.38644C326.868 2.17071 327.401 2.05977 327.94 2.05994H436.997L458.574 24.6237Z" fill="#779DD8"/>
                <path d="M365.675 23.241H342.765C340.851 23.241 339.299 24.8652 339.299 26.8688V50.8486C339.299 52.8522 340.851 54.4764 342.765 54.4764H365.675C367.589 54.4764 369.141 52.8522 369.141 50.8486V26.8688C369.141 24.8652 367.589 23.241 365.675 23.241Z" fill="white"/>
                <path d="M402.661 23.241H379.752C377.837 23.241 376.286 24.8652 376.286 26.8688V50.8486C376.286 52.8522 377.837 54.4764 379.752 54.4764H402.661C404.576 54.4764 406.127 52.8522 406.127 50.8486V26.8688C406.127 24.8652 404.576 23.241 402.661 23.241Z" fill="white"/>
                <path d="M443.088 65.4736H339.299V70.3107H443.088V65.4736Z" fill="#4D76B8"/>
                <path d="M443.088 81.3271H339.299V86.1642H443.088V81.3271Z" fill="#4D76B8"/>
                <path d="M443.088 97.1782H339.299V102.015H443.088V97.1782Z" fill="#4D76B8"/>
                <path d="M443.088 113.031H339.299V117.868H443.088V113.031Z" fill="#4D76B8"/>
                <path d="M443.088 128.883H339.299V133.72H443.088V128.883Z" fill="#4D76B8"/>
                <path d="M443.088 144.735H339.299V149.572H443.088V144.735Z" fill="#4D76B8"/>
                <path d="M459.169 25.2463H439.048C438.779 25.2463 438.512 25.1907 438.263 25.0829C438.014 24.975 437.788 24.8168 437.598 24.6175C437.407 24.4181 437.256 24.1814 437.153 23.921C437.05 23.6605 436.997 23.3813 436.997 23.0994V2.05994L458.574 24.6237L459.169 25.2463ZM482.721 51.2332V183.052C482.721 183.616 482.615 184.174 482.409 184.695C482.203 185.216 481.901 185.69 481.52 186.088C481.139 186.487 480.687 186.803 480.189 187.019C479.691 187.235 479.158 187.346 478.619 187.346H352.087C351 187.342 349.958 186.889 349.19 186.085C348.421 185.28 347.988 184.19 347.985 183.052V32.9632C347.984 32.3993 348.09 31.8409 348.297 31.3198C348.503 30.7988 348.805 30.3254 349.186 29.9267C349.567 29.5279 350.019 29.2116 350.517 28.9959C351.015 28.7802 351.548 28.6692 352.087 28.6694H461.144L482.721 51.2332Z" fill="#A9C0FF"/>
                <path d="M483.316 51.8558H463.195C462.651 51.8558 462.129 51.6296 461.744 51.227C461.36 50.8243 461.144 50.2783 461.144 49.7089V28.6694L482.721 51.2332L483.316 51.8558Z" fill="#4D76B8"/>
                <path d="M398.638 57.3872H367.534C366.258 57.3872 365.224 58.47 365.224 59.8057V88.0313C365.224 89.3671 366.258 90.4499 367.534 90.4499H398.638C399.914 90.4499 400.948 89.3671 400.948 88.0313V59.8057C400.948 58.47 399.914 57.3872 398.638 57.3872Z" fill="white"/>
                <path d="M461.143 157.123H366.038V160.751H461.143V157.123Z" fill="#456BA3"/>
                <path d="M461.143 145.316H366.038V148.943H461.143V145.316Z" fill="#456BA3"/>
                <path d="M461.143 133.507H366.038V137.135H461.143V133.507Z" fill="#456BA3"/>
                <path d="M461.143 121.698H366.038V125.326H461.143V121.698Z" fill="#456BA3"/>
                <path d="M461.143 109.89H366.038V113.518H461.143V109.89Z" fill="#456BA3"/>
                <path d="M461.143 98.0815H366.038V101.709H461.143V98.0815Z" fill="#456BA3"/>
                <path d="M461.143 86.2731H411.477V89.9009H461.143V86.2731Z" fill="#456BA3"/>
                <path d="M461.143 74.4657H411.477V78.0935H461.143V74.4657Z" fill="#456BA3"/>
                <path d="M461.143 62.6571H411.477V66.2849H461.143V62.6571Z" fill="#456BA3"/>
                <path d="M438.654 365.686H385.137V421.703H438.654V365.686Z" fill="#A9C0FF"/>
                <path d="M385.136 418.075V369.314C385.136 368.352 384.771 367.429 384.121 366.749C383.471 366.069 382.59 365.686 381.671 365.686H371.966C371.047 365.686 370.165 366.069 369.515 366.749C368.865 367.429 368.5 368.352 368.5 369.314V435.489C368.5 436.451 368.865 437.374 369.515 438.054C370.165 438.734 371.047 439.117 371.966 439.117H435.188C436.107 439.117 436.989 438.734 437.639 438.054C438.289 437.374 438.654 436.451 438.654 435.489V425.331C438.654 424.369 438.289 423.446 437.639 422.766C436.989 422.085 436.107 421.703 435.188 421.703H388.602C388.147 421.703 387.697 421.609 387.276 421.427C386.856 421.245 386.473 420.977 386.152 420.641C385.83 420.304 385.574 419.904 385.4 419.464C385.226 419.023 385.136 418.552 385.136 418.075Z" fill="#6299E8"/>
                <path d="M420.214 421.703V439.117H470.265C471.185 439.117 472.066 438.734 472.716 438.054C473.366 437.374 473.731 436.451 473.731 435.489V425.331C473.731 424.369 473.366 423.446 472.716 422.766C472.066 422.085 471.185 421.703 470.265 421.703H420.214Z" fill="#C2D5FF"/>
                <path d="M570.803 415.92C603.557 415.92 630.11 388.128 630.11 353.844C630.11 319.56 603.557 291.767 570.803 291.767C538.049 291.767 511.496 319.56 511.496 353.844C511.496 388.128 538.049 415.92 570.803 415.92Z" fill="#D9EBFF"/>
                <path d="M140.136 84.3275H94.1076C93.648 84.3275 93.2072 84.1364 92.8822 83.7962C92.5572 83.4561 92.3746 82.9947 92.3746 82.5136C92.3746 82.0325 92.5572 81.5712 92.8822 81.231C93.2072 80.8908 93.648 80.6997 94.1076 80.6997H140.136C140.596 80.6997 141.037 80.8908 141.362 81.231C141.687 81.5712 141.869 82.0325 141.869 82.5136C141.869 82.9947 141.687 83.4561 141.362 83.7962C141.037 84.1364 140.596 84.3275 140.136 84.3275ZM140.136 96.5171H94.1076C93.648 96.5171 93.2072 96.326 92.8822 95.9858C92.5572 95.6456 92.3746 95.1842 92.3746 94.7032C92.3746 94.2221 92.5572 93.7607 92.8822 93.4205C93.2072 93.0804 93.648 92.8893 94.1076 92.8893H140.136C140.596 92.8893 141.037 93.0804 141.362 93.4205C141.687 93.7607 141.869 94.2221 141.869 94.7032C141.869 95.1842 141.687 95.6456 141.362 95.9858C141.037 96.326 140.596 96.5171 140.136 96.5171ZM140.136 108.707H94.1076C93.648 108.707 93.2072 108.515 92.8822 108.175C92.5572 107.835 92.3746 107.374 92.3746 106.893C92.3746 106.412 92.5572 105.95 92.8822 105.61C93.2072 105.27 93.648 105.079 94.1076 105.079H140.136C140.596 105.079 141.037 105.27 141.362 105.61C141.687 105.95 141.869 106.412 141.869 106.893C141.869 107.374 141.687 107.835 141.362 108.175C141.037 108.515 140.596 108.707 140.136 108.707ZM735.111 356.204H689.082C688.623 356.204 688.182 356.013 687.857 355.673C687.532 355.333 687.349 354.872 687.349 354.391C687.349 353.91 687.532 353.448 687.857 353.108C688.182 352.768 688.623 352.577 689.082 352.577H735.111C735.571 352.577 736.012 352.768 736.337 353.108C736.662 353.448 736.844 353.91 736.844 354.391C736.844 354.872 736.662 355.333 736.337 355.673C736.012 356.013 735.571 356.204 735.111 356.204ZM735.111 368.394H689.082C688.623 368.394 688.182 368.203 687.857 367.863C687.532 367.523 687.349 367.061 687.349 366.58C687.349 366.099 687.532 365.638 687.857 365.297C688.182 364.957 688.623 364.766 689.082 364.766H735.111C735.571 364.766 736.012 364.957 736.337 365.297C736.662 365.638 736.844 366.099 736.844 366.58C736.844 367.061 736.662 367.523 736.337 367.863C736.012 368.203 735.571 368.394 735.111 368.394ZM735.111 380.584H689.082C688.623 380.584 688.182 380.392 687.857 380.052C687.532 379.712 687.349 379.251 687.349 378.77C687.349 378.289 687.532 377.827 687.857 377.487C688.182 377.147 688.623 376.956 689.082 376.956H735.111C735.571 376.956 736.012 377.147 736.337 377.487C736.662 377.827 736.844 378.289 736.844 378.77C736.844 379.251 736.662 379.712 736.337 380.052C736.012 380.392 735.571 380.584 735.111 380.584Z" fill="#A9C0FF"/>
                <path d="M537.745 144.555H243.832C240.004 144.555 236.9 147.804 236.9 151.811V370.523C236.9 374.53 240.004 377.779 243.832 377.779H537.745C541.573 377.779 544.677 374.53 544.677 370.523V151.811C544.677 147.804 541.573 144.555 537.745 144.555Z" fill="#6299E8"/>
                <path d="M537.745 379.593H243.832C241.534 379.59 239.332 378.634 237.707 376.933C236.083 375.233 235.169 372.928 235.167 370.523V151.811C235.169 149.406 236.083 147.101 237.707 145.4C239.332 143.7 241.534 142.744 243.832 142.741H537.745C540.042 142.744 542.245 143.7 543.869 145.4C545.493 147.101 546.407 149.406 546.41 151.811V370.523C546.407 372.928 545.493 375.233 543.869 376.933C542.245 378.634 540.042 379.59 537.745 379.593ZM243.832 146.369C242.453 146.37 241.132 146.944 240.157 147.964C239.182 148.985 238.634 150.368 238.633 151.811V370.523C238.634 371.966 239.182 373.349 240.157 374.369C241.132 375.39 242.453 375.963 243.832 375.965H537.745C539.123 375.963 540.445 375.39 541.419 374.369C542.394 373.349 542.942 371.966 542.944 370.523V151.811C542.942 150.368 542.394 148.985 541.419 147.964C540.445 146.944 539.123 146.37 537.745 146.369H243.832Z" fill="#4D76B8"/>
                <path d="M557.048 144.555H263.135C259.307 144.555 256.203 147.804 256.203 151.811V370.523C256.203 374.53 259.307 377.779 263.135 377.779H557.048C560.876 377.779 563.98 374.53 563.98 370.523V151.811C563.98 147.804 560.876 144.555 557.048 144.555Z" fill="white"/>
                <path d="M533.768 168.49H286.415C282.586 168.49 279.483 171.739 279.483 175.746V346.587C279.483 350.594 282.586 353.842 286.415 353.842H533.768C537.596 353.842 540.7 350.594 540.7 346.587V175.746C540.7 171.739 537.596 168.49 533.768 168.49Z" fill="#D9EBFF"/>
                <path d="M557.048 379.593H263.135C260.838 379.59 258.635 378.634 257.011 376.933C255.386 375.233 254.472 372.928 254.47 370.523V151.811C254.472 149.406 255.386 147.101 257.011 145.4C258.635 143.7 260.838 142.744 263.135 142.741H557.048C559.345 142.744 561.548 143.7 563.172 145.4C564.797 147.101 565.71 149.406 565.713 151.811V370.523C565.71 372.928 564.797 375.233 563.172 376.933C561.548 378.634 559.345 379.59 557.048 379.593ZM263.135 146.369C261.756 146.37 260.435 146.944 259.46 147.964C258.486 148.985 257.937 150.368 257.936 151.811V370.523C257.937 371.966 258.486 373.349 259.46 374.369C260.435 375.39 261.756 375.963 263.135 375.965H557.048C558.426 375.963 559.748 375.39 560.723 374.369C561.697 373.349 562.245 371.966 562.247 370.523V151.811C562.245 150.368 561.697 148.985 560.723 147.964C559.748 146.944 558.426 146.37 557.048 146.369H263.135Z" fill="#4D76B8"/>
                <path d="M533.768 168.491H286.415C284.576 168.491 282.813 169.255 281.513 170.616C280.213 171.977 279.483 173.822 279.483 175.746V195.726H540.7V175.746C540.7 173.822 539.969 171.977 538.669 170.616C537.369 169.255 535.606 168.491 533.768 168.491ZM279.483 330.69V346.588C279.483 348.512 280.213 350.358 281.513 351.718C282.813 353.079 284.576 353.843 286.415 353.843H533.768C535.606 353.843 537.369 353.079 538.669 351.718C539.969 350.358 540.7 348.512 540.7 346.588V330.69H279.483Z" fill="#A9C0FF"/>
                <path d="M536.663 437.884H589.992C587.015 437.884 584.124 436.835 581.785 434.907C579.446 432.979 577.795 430.283 577.098 427.254L559.851 352.357C559.153 349.328 557.502 346.632 555.163 344.704C552.824 342.776 549.934 341.727 546.957 341.727H542.629C540.626 341.727 538.649 342.202 536.847 343.116C535.044 344.03 533.463 345.359 532.221 347.004C530.98 348.649 530.11 350.567 529.678 352.615C529.246 354.662 529.262 356.785 529.726 358.824L544.094 422.02C544.558 424.059 544.574 426.182 544.142 428.229C543.71 430.276 542.84 432.194 541.599 433.839C540.357 435.485 538.776 436.814 536.973 437.728C535.17 438.642 533.194 439.117 531.191 439.117L536.663 437.884Z" fill="#6299E8"/>
                <path d="M540.55 341.604H593.878H594.003L611.389 420.895C611.835 422.93 611.837 425.043 611.395 427.078C610.953 429.113 610.079 431.018 608.837 432.65C607.594 434.283 606.016 435.601 604.22 436.507C602.424 437.413 600.456 437.884 598.462 437.884H589.992C587.015 437.884 584.124 436.836 581.785 434.907C579.446 432.979 577.795 430.283 577.098 427.254L559.851 352.357C559.153 349.328 557.502 346.632 555.163 344.704C552.824 342.776 549.934 341.727 546.957 341.727L540.55 341.604ZM513.119 411.872L518.502 429.276C519.33 432.123 521.01 434.617 523.294 436.388C525.579 438.16 528.347 439.117 531.191 439.117C533.193 439.117 535.17 438.642 536.973 437.728C538.776 436.814 540.357 435.485 541.598 433.839C542.84 432.194 543.709 430.276 544.142 428.229C544.574 426.182 544.557 424.059 544.094 422.02L541.787 411.872H513.119Z" fill="#4D76B8"/>
                <path d="M598.462 437.884C600.456 437.884 602.424 437.413 604.22 436.507C606.016 435.601 607.594 434.283 608.837 432.65C610.079 431.018 610.953 429.113 611.395 427.078C611.837 425.043 611.835 422.93 611.389 420.895L582.564 289.433C582.118 287.399 582.115 285.286 582.557 283.251C582.999 281.215 583.874 279.311 585.116 277.678C586.359 276.046 587.936 274.727 589.733 273.821C591.529 272.915 593.497 272.445 595.491 272.445H600.658L672.682 289.433L701.508 420.895C701.954 422.93 701.956 425.043 701.514 427.078C701.072 429.113 700.197 431.018 698.955 432.65C697.713 434.283 696.135 435.601 694.339 436.507C692.542 437.413 690.574 437.884 688.58 437.884H598.462Z" fill="#6299E8"/>
                <path d="M685.609 272.445H690.776C693.653 272.445 696.452 273.424 698.751 275.234C701.05 277.045 702.724 279.589 703.521 282.483L709.535 304.321C710.332 307.215 712.006 309.759 714.305 311.569C716.604 313.38 719.403 314.359 722.28 314.359H632.161C629.284 314.359 626.485 313.38 624.186 311.569C621.887 309.759 620.213 307.215 619.416 304.321L613.403 282.483C612.606 279.589 610.932 277.045 608.633 275.234C606.334 273.424 603.535 272.445 600.658 272.445H685.609Z" fill="#4D76B8"/>
                <path d="M632.161 314.359H633.612C635.618 314.359 637.597 313.883 639.402 312.967C641.207 312.05 642.789 310.717 644.03 309.068C645.272 307.419 646.14 305.496 646.568 303.445C646.997 301.394 646.976 299.268 646.507 297.227L644.323 287.731H734.441L736.625 297.227C737.095 299.268 737.116 301.394 736.687 303.445C736.258 305.496 735.39 307.419 734.149 309.068C732.908 310.717 731.325 312.05 729.52 312.967C727.716 313.883 725.736 314.359 723.73 314.359H632.161Z" fill="#92B1EF"/>
                <path d="M667.064 335.477H603.879V339.105H667.064V335.477Z" fill="#4D76B8"/>
                <path d="M671.401 351.294H608.214V354.922H671.401V351.294Z" fill="#4D76B8"/>
                <path d="M675.835 367.256H612.65V370.883H675.835V367.256Z" fill="#4D76B8"/>
                <path d="M680.27 383.218H617.085V386.846H680.27V383.218Z" fill="#4D76B8"/>
                <path d="M684.704 399.18H621.519V402.808H684.704V399.18Z" fill="#4D76B8"/>
                <path d="M689.14 415.144H625.954V418.772H689.14V415.144Z" fill="#4D76B8"/>
                <path d="M575.704 364.867H544.517V368.495H575.704V364.867Z" fill="#4D76B8"/>
                <path d="M577.843 380.685H546.657V384.312H577.843V380.685Z" fill="#4D76B8"/>
                <path d="M580.033 396.647H548.846V400.275H580.033V396.647Z" fill="#4D76B8"/>
                <path d="M582.221 412.609H551.034V416.237H582.221V412.609Z" fill="#4D76B8"/>
                <path d="M50.6185 439.117L187.887 438.88C188.977 438.881 190.057 438.657 191.064 438.221C192.072 437.786 192.987 437.146 193.759 436.34C194.53 435.534 195.143 434.577 195.561 433.523C195.979 432.469 196.195 431.339 196.195 430.198L212.665 336.476C212.667 334.172 211.794 331.961 210.238 330.33C208.683 328.699 206.572 327.781 204.37 327.779L35.4285 361.523C35.0517 361.523 34.6753 361.549 34.3019 361.601C29.1683 362.326 26.3718 368.363 28.3975 373.353L42.3238 430.42C42.3228 431.561 42.5366 432.691 42.953 433.746C43.3693 434.8 43.9801 435.759 44.7503 436.566C45.5205 437.374 46.4352 438.015 47.4421 438.452C48.4489 438.89 49.5283 439.116 50.6185 439.117Z" fill="#618AC6"/>
                <path d="M191.55 439.117H60.0529V260.112C60.0529 258.829 60.5397 257.599 61.4064 256.692C62.273 255.785 63.4485 255.275 64.6741 255.275H186.929C188.154 255.275 189.33 255.785 190.196 256.692C191.063 257.599 191.55 258.829 191.55 260.112V439.117Z" fill="#A9C0FF"/>
                <path d="M169.823 283.112H125.801V286.74H169.823V283.112Z" fill="#456BA3"/>
                <path d="M169.823 302.281H125.801V305.909H169.823V302.281Z" fill="#456BA3"/>
                <path d="M169.823 321.451H125.801V325.079H169.823V321.451Z" fill="#456BA3"/>
                <path d="M203.058 410.941H163.528V367.86H208.956C209.931 367.86 210.895 368.088 211.775 368.527C212.656 368.966 213.432 369.606 214.047 370.399C214.662 371.192 215.1 372.118 215.329 373.111C215.559 374.103 215.573 375.137 215.373 376.136L209.475 405.489C209.165 407.031 208.359 408.414 207.19 409.406C206.022 410.399 204.563 410.941 203.058 410.941Z" fill="#4D76B8"/>
                <path d="M46.1682 438.991L187.962 439.117C189.053 439.118 190.132 438.894 191.14 438.458C192.148 438.022 193.063 437.383 193.835 436.577C194.606 435.771 195.219 434.813 195.637 433.759C196.055 432.706 196.27 431.576 196.271 430.435L173.405 332.004C173.405 330.863 173.192 329.733 172.775 328.678C172.359 327.623 171.748 326.665 170.978 325.857C170.208 325.05 169.293 324.409 168.286 323.971C167.279 323.534 166.2 323.308 165.11 323.307L117.954 323.265C116.621 323.264 115.308 323.599 114.124 324.241C112.941 324.884 111.923 325.815 111.156 326.956L103.229 348.514C102.462 349.656 101.444 350.587 100.261 351.229C99.0778 351.872 97.7642 352.206 96.4313 352.205L23.2921 352.146C22.2019 352.145 21.1222 352.369 20.1146 352.805C19.107 353.24 18.1913 353.88 17.4198 354.686C16.6482 355.492 16.036 356.45 15.6179 357.503C15.1998 358.557 14.9842 359.687 14.9833 360.828L37.8735 430.294C37.8725 431.435 38.0863 432.565 38.5027 433.62C38.919 434.675 39.5298 435.633 40.3 436.441C41.0703 437.248 41.9849 437.889 42.9918 438.327C43.9986 438.764 45.078 438.99 46.1682 438.991Z" fill="#6194E0"/>
                <path d="M89.7058 395.164L62.4058 371.013C62.1671 370.802 61.8757 370.667 61.5659 370.623C61.2562 370.58 60.941 370.63 60.6575 370.767C60.374 370.905 60.134 371.125 59.9659 371.4C59.7977 371.676 59.7083 371.996 59.7083 372.324V375.456C59.7083 375.681 59.6659 375.905 59.5835 376.113C59.5011 376.321 59.3804 376.51 59.2282 376.669C59.0759 376.829 58.8952 376.955 58.6963 377.041C58.4974 377.128 58.2843 377.172 58.069 377.172H20.3154L0 372.516V420.252H58.069C58.2843 420.252 58.4974 420.296 58.6963 420.383C58.8952 420.469 59.0759 420.595 59.2282 420.754C59.3804 420.914 59.5011 421.103 59.5835 421.311C59.6659 421.519 59.7083 421.742 59.7083 421.968V424.297C59.7083 424.634 59.8034 424.964 59.9816 425.245C60.1598 425.526 60.4133 425.746 60.7102 425.877C61.0072 426.009 61.3346 426.045 61.6514 425.983C61.9681 425.92 62.2603 425.761 62.4913 425.526L89.7913 397.704C89.9551 397.537 90.0838 397.336 90.1689 397.114C90.2541 396.891 90.294 396.653 90.2859 396.414C90.2779 396.175 90.2221 395.94 90.1222 395.725C90.0223 395.509 89.8805 395.318 89.7058 395.164Z" fill="#4D76B8"/>
                <path d="M20.3154 377.172H4.44807C3.26837 377.172 2.13699 376.681 1.30282 375.808C0.468646 374.935 3.06409e-06 373.751 0 372.516C3.06408e-06 371.281 0.468646 370.097 1.30282 369.224C2.13699 368.351 3.26837 367.86 4.44807 367.86H17.3005L20.3154 377.172Z" fill="#4469A0"/>
                <path d="M104.472 284.926H75.5358C74.8977 284.926 74.3805 285.467 74.3805 286.135V322.057C74.3805 322.725 74.8977 323.266 75.5358 323.266H104.472C105.11 323.266 105.627 322.725 105.627 322.057V286.135C105.627 285.467 105.11 284.926 104.472 284.926Z" fill="#D9EBFF"/>
                <path d="M737 439.117H0V450H737V439.117Z" fill="#456BA3"/>
                <path opacity="0.28" d="M303.139 201.259H143.385C142.935 201.259 142.504 201.073 142.186 200.74C141.869 200.407 141.69 199.956 141.69 199.486V100.576C141.69 100.105 141.869 99.6543 142.186 99.3217C142.504 98.9891 142.935 98.8022 143.385 98.8022H238.777C239.027 98.8022 239.274 98.8601 239.5 98.9715C239.726 99.083 239.925 99.2454 240.084 99.4471L259.935 124.632C260.094 124.834 260.293 124.996 260.519 125.108C260.745 125.219 260.992 125.277 261.242 125.277H303.139C303.361 125.277 303.582 125.323 303.787 125.412C303.993 125.501 304.18 125.632 304.337 125.796C304.494 125.961 304.619 126.157 304.704 126.372C304.789 126.587 304.833 126.818 304.833 127.05V199.486C304.833 199.956 304.655 200.407 304.337 200.74C304.019 201.073 303.588 201.259 303.139 201.259Z" fill="#6299E8"/>
                <path d="M287.646 181.099H127.891C127.442 181.099 127.011 180.912 126.693 180.579C126.376 180.247 126.197 179.796 126.197 179.325V80.4151C126.197 80.1822 126.241 79.9516 126.326 79.7364C126.411 79.5212 126.536 79.3257 126.693 79.161C126.851 78.9964 127.037 78.8657 127.243 78.7766C127.449 78.6875 127.669 78.6416 127.891 78.6416H223.284C223.534 78.6416 223.781 78.6994 224.007 78.8109C224.233 78.9224 224.432 79.0848 224.591 79.2865L244.442 104.471C244.601 104.673 244.8 104.836 245.026 104.947C245.252 105.058 245.499 105.116 245.749 105.116H287.646C288.095 105.116 288.526 105.303 288.844 105.636C289.162 105.968 289.34 106.419 289.34 106.89V179.325C289.34 179.796 289.162 180.247 288.844 180.579C288.526 180.912 288.095 181.099 287.646 181.099Z" fill="white"/>
                <path d="M274.035 156.676H232.274C230.998 156.676 229.964 157.758 229.964 159.094V166.171C229.964 167.506 230.998 168.589 232.274 168.589H274.035C275.312 168.589 276.346 167.506 276.346 166.171V159.094C276.346 157.758 275.312 156.676 274.035 156.676Z" fill="#A9C0FF"/>
                <path d="M274.035 135.827H232.274C230.998 135.827 229.964 136.909 229.964 138.245V145.322C229.964 146.657 230.998 147.74 232.274 147.74H274.035C275.312 147.74 276.346 146.657 276.346 145.322V138.245C276.346 136.909 275.312 135.827 274.035 135.827Z" fill="#A9C0FF"/>
                <path d="M180.731 166.008H147.62C147.171 166.008 146.74 165.821 146.422 165.489C146.105 165.156 145.926 164.705 145.926 164.235V137.6C145.926 137.13 146.105 136.679 146.422 136.346C146.74 136.014 147.171 135.827 147.62 135.827H190.519C190.968 135.827 191.399 136.014 191.717 136.346C192.035 136.679 192.213 137.13 192.213 137.6V156.396C192.213 156.668 192.153 156.937 192.038 157.181C191.923 157.425 191.755 157.638 191.548 157.804L181.761 165.643C181.465 165.88 181.104 166.008 180.731 166.008Z" fill="#A9C0FF"/>
                <path d="M181.556 97.108H148.237C146.961 97.108 145.926 98.1909 145.926 99.5266V106.603C145.926 107.939 146.961 109.022 148.237 109.022H181.556C182.832 109.022 183.867 107.939 183.867 106.603V99.5266C183.867 98.1909 182.832 97.108 181.556 97.108Z" fill="#A9C0FF"/>
                <path d="M287.646 182.913H127.891C126.983 182.912 126.112 182.533 125.469 181.861C124.826 181.188 124.465 180.276 124.464 179.325V80.4151C124.465 79.4639 124.826 78.552 125.469 77.8795C126.112 77.2069 126.983 76.8285 127.891 76.8274H223.284C223.789 76.8266 224.288 76.9431 224.745 77.1686C225.202 77.394 225.606 77.7228 225.926 78.1311L245.779 103.317L287.646 103.303C288.554 103.304 289.426 103.682 290.068 104.355C290.711 105.027 291.072 105.939 291.073 106.89V179.325C291.072 180.276 290.711 181.188 290.068 181.861C289.426 182.533 288.554 182.912 287.646 182.913ZM223.254 80.4399L127.891 80.4553L127.93 179.325L287.607 179.285V106.89L245.748 106.931C245.243 106.931 244.743 106.815 244.286 106.589C243.829 106.363 243.425 106.034 243.104 105.626L223.254 80.4399Z" fill="#4D76B8"/>
                <path d="M578.121 169.522L542.817 64.4975C542.247 62.8144 542.339 60.9631 543.073 59.3509C543.806 57.7387 545.122 56.4976 546.73 55.9007L612.124 31.6256C612.92 31.33 613.764 31.2015 614.608 31.2473C615.451 31.2932 616.278 31.5126 617.041 31.8928C617.803 32.2731 618.487 32.807 619.052 33.4638C619.618 34.1206 620.054 34.8876 620.337 35.721L655.431 153.969C655.528 154.257 655.607 154.552 655.667 154.851C656.488 158.964 652.997 162.662 648.991 162.403L586.335 173.618C584.727 174.215 582.958 174.119 581.418 173.351C579.877 172.583 578.692 171.205 578.121 169.522Z" fill="#779DD8"/>
                <path d="M573.973 159.605L537.246 51.2129C536.676 49.5298 536.768 47.6785 537.502 46.0662C538.236 44.454 539.551 43.213 541.159 42.616L613.43 15.7879C615.038 15.191 616.807 15.2871 618.347 16.0552C619.887 16.8232 621.073 18.2003 621.643 19.8834L633.857 55.9308C634.203 56.9497 634.308 58.0406 634.166 59.1113C634.023 60.1821 633.636 61.2011 633.038 62.0823L621.734 78.7288C621.136 79.61 620.749 80.6291 620.606 81.6998C620.463 82.7706 620.569 83.8615 620.914 84.8804L638.16 135.778C638.73 137.461 638.638 139.312 637.905 140.924C637.171 142.537 635.855 143.778 634.247 144.375L582.186 163.7C581.39 163.996 580.546 164.125 579.702 164.079C578.859 164.033 578.032 163.813 577.269 163.433C576.507 163.053 575.823 162.519 575.257 161.862C574.692 161.205 574.255 160.438 573.973 159.605Z" fill="#92B1EF"/>
                <path d="M607.523 31.0406L553.055 52.3822L554.676 56.9123L609.143 35.5706L607.523 31.0406Z" fill="#4D76B8"/>
                <path d="M613.007 45.434L558.539 66.7761L560.159 71.3062L614.627 49.9641L613.007 45.434Z" fill="#4D76B8"/>
                <path d="M618.535 60.3919L564.068 81.7335L565.688 86.2636L620.155 64.922L618.535 60.3919Z" fill="#4D76B8"/>
                <path d="M360.459 252.683H300.195C300.025 252.683 299.863 252.612 299.743 252.487C299.623 252.361 299.555 252.191 299.555 252.014V214.702C299.555 214.525 299.623 214.354 299.743 214.229C299.863 214.103 300.025 214.033 300.195 214.033H336.179C336.274 214.033 336.367 214.055 336.452 214.097C336.537 214.139 336.613 214.2 336.673 214.276L344.161 223.777C344.221 223.853 344.296 223.914 344.381 223.956C344.466 223.998 344.56 224.02 344.654 224.02H360.458C360.628 224.02 360.791 224.09 360.91 224.216C361.03 224.341 361.098 224.512 361.098 224.689V252.014C361.098 252.191 361.03 252.361 360.91 252.487C360.791 252.612 360.628 252.683 360.459 252.683ZM440.223 252.683H379.959C379.79 252.683 379.627 252.612 379.507 252.487C379.388 252.361 379.32 252.191 379.32 252.014V214.702C379.32 214.525 379.388 214.354 379.507 214.229C379.627 214.103 379.79 214.033 379.959 214.033H415.944C416.039 214.033 416.132 214.055 416.217 214.097C416.302 214.139 416.377 214.2 416.437 214.276L423.926 223.777C423.985 223.853 424.061 223.914 424.146 223.956C424.231 223.998 424.324 224.02 424.419 224.02H440.223C440.393 224.02 440.555 224.09 440.675 224.216C440.795 224.341 440.862 224.512 440.862 224.689V252.014C440.862 252.191 440.795 252.361 440.675 252.487C440.555 252.612 440.393 252.683 440.223 252.683ZM519.988 252.683H459.724C459.555 252.683 459.392 252.612 459.272 252.487C459.152 252.361 459.085 252.191 459.085 252.014V214.702C459.085 214.525 459.152 214.354 459.272 214.229C459.392 214.103 459.555 214.033 459.724 214.033H495.709C495.803 214.033 495.896 214.055 495.982 214.097C496.067 214.139 496.142 214.2 496.202 214.276L503.69 223.777C503.75 223.853 503.826 223.914 503.911 223.956C503.996 223.998 504.089 224.02 504.183 224.02H519.988C520.158 224.02 520.32 224.09 520.44 224.216C520.56 224.341 520.627 224.512 520.627 224.689V252.014C520.627 252.191 520.56 252.361 520.44 252.487C520.32 252.612 520.158 252.683 519.988 252.683Z" fill="#A9C0FF"/>
                <path d="M358.787 283.64H301.866C300.794 283.639 299.766 283.192 299.008 282.399C298.25 281.605 297.824 280.53 297.823 279.407V265.67C297.824 264.548 298.25 263.472 299.008 262.678C299.766 261.885 300.794 261.439 301.866 261.437H358.787C359.859 261.439 360.887 261.885 361.645 262.678C362.403 263.472 362.829 264.548 362.831 265.67V279.407C362.829 280.53 362.403 281.605 361.645 282.399C360.887 283.192 359.859 283.639 358.787 283.64ZM301.866 265.065C301.713 265.065 301.566 265.129 301.458 265.243C301.35 265.356 301.289 265.509 301.288 265.67V279.407C301.289 279.568 301.35 279.721 301.458 279.835C301.566 279.948 301.713 280.012 301.866 280.012H358.787C358.94 280.012 359.087 279.948 359.195 279.835C359.303 279.721 359.364 279.568 359.365 279.407V265.67C359.364 265.509 359.303 265.356 359.195 265.243C359.087 265.129 358.94 265.065 358.787 265.065H301.866Z" fill="#456BA3"/>
                <path d="M518.317 263.251H461.396C460.119 263.251 459.085 264.334 459.085 265.67V279.407C459.085 280.743 460.119 281.825 461.396 281.825H518.317C519.593 281.825 520.628 280.743 520.628 279.407V265.67C520.628 264.334 519.593 263.251 518.317 263.251Z" fill="#A9C0FF"/>
                <path d="M518.317 292.393H461.396C460.119 292.393 459.085 293.476 459.085 294.812V308.549C459.085 309.885 460.119 310.968 461.396 310.968H518.317C519.593 310.968 520.628 309.885 520.628 308.549V294.812C520.628 293.476 519.593 292.393 518.317 292.393Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}