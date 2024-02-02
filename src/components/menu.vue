<script>
import {
  layoutComputed
} from "@/state/helpers";

export default {
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
    },
  },

  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },


  mounted() {
    this.initActiveMenu();
    // if (this.rmenu == 'vertical' && this.layoutType == 'twocolumn') {
    //   document.documentElement.setAttribute("data-layout", "vertical");
    // }
    // document.getElementById('overlay').addEventListener('click', () => {
    //   document.body.classList.remove('vertical-sidebar-enable');
    // });

    window.addEventListener("resize", () => {
      if (this.layoutType == 'twocolumn') {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 767) {
          document.documentElement.setAttribute("data-layout", "vertical");
          this.rmenu = 'vertical';
          localStorage.setItem('rmenu', 'vertical');
        } else {
          document.documentElement.setAttribute("data-layout", "vertical");
          this.rmenu = 'twocolumn';
          localStorage.setItem('rmenu', 'twocolumn');
          setTimeout(() => {
            this.initActiveMenu();
          }, 50);

        }
      }
    });

    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");

      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains("show")) {
                siblingCollapse.classList.remove("show");
                siblingCollapse.parentElement.firstChild.setAttribute("aria-expanded", "false");
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2) {
                item.firstElementChild.setAttribute("aria-expanded", "false");
                item.firstElementChild.classList.remove("active");
              }
              let ids = item.querySelectorAll("*[id]");
              ids.forEach((item1) => {
                item1.classList.remove("show");
                item1.parentElement.firstChild.setAttribute("aria-expanded", "false");
                item1.parentElement.firstChild.classList.remove("active");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute("aria-expanded"))
                      subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", (e) => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach((childCollapse) => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.classList.remove("show");
            childCollapseInstance.parentElement.firstChild.setAttribute("aria-expanded", "false");
          });
        });
      });
    }
  },

  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
      // if (document.getElementsByClassName("mm-active").length > 0) {
      //   const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
      //   if (currentPosition > 500)
      //     if (this.$refs.isSimplebar)
      //       this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
      // }

      document.body.classList.remove('vertical-sidebar-enable')
    },

    initActiveMenu() {
      const pathName = window.location.pathname;
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.nav-link"));
        let activeItems = items.filter((x) => x.classList.contains("active"));
        this.removeActivation(activeItems);
        let matchingMenuItem = items.find((x) => {
          return x.getAttribute("href") === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        } else {
          var id = pathName.replace("/", "");
          if (id) document.body.classList.add("twocolumn-panel");
          this.activateIconSidebarActive(pathName);
        }
      }
    },

    updateMenu(e, event) {

      document.body.classList.remove("twocolumn-panel");
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll(".show"));
        items.forEach((item) => {
          item.classList.remove("show");
        });
      }
      const icons = document.getElementById("two-column-menu");
      if (icons) {
        const activeIcons = Array.from(
          icons.querySelectorAll(".nav-icon.active")
        );
        activeIcons.forEach((item) => {
          item.classList.remove("active");
        });
      }
      document.getElementById(e).classList.add("show");
      event.target.classList.add("active")
      this.activateIconSidebarActive("#" + e);
    },

    removeActivation(items) {
      items.forEach((item) => {
        if (item.classList.contains("menu-link")) {
          if (!item.classList.contains("active")) {
            item.setAttribute("aria-expanded", false);
          }
          item.nextElementSibling.classList.remove("show");
        }
        if (item.classList.contains("nav-link")) {
          if (item.nextElementSibling) {
            item.nextElementSibling.classList.remove("show");
          }
          item.setAttribute("aria-expanded", false);
        }
        item.classList.remove("active");
      });
    },

    activateParentDropdown(item) {
      // navbar-nav menu add active
      item.classList.add("active");
      let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
      if (parentCollapseDiv) {
        // to set aria expand true remaining
        parentCollapseDiv.classList.add("show");
        parentCollapseDiv.parentElement.children[0].classList.add("active");
        parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
        if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
          if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling) {
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown")) {
              const grandparent = parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown");
              this.activateIconSidebarActive("#" + grandparent.getAttribute("id"));
              grandparent.classList.add("show");
            }
          }
          this.activateIconSidebarActive("#" + parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")
            .getAttribute("id"));

          parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
          if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
            parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
          return false;
        }
        this.activateIconSidebarActive("#" + parentCollapseDiv.getAttribute("id"));
        return false;
      }
      return false;
    },

    activateIconSidebarActive(id) {
      var menu = document.querySelector(
        "#two-column-menu .simplebar-content-wrapper a[href='" +
        id +
        "'].nav-icon"
      );
      if (menu !== null) {
        menu.classList.add("active");
      }
    },
  },
};
</script>

<template>
  <BContainer fluid>
    <div id="two-column-menu"></div>

    <template v-if="layoutType === 'vertical' || layoutType === 'semibox'">
      <ul class="navbar-nav h-100" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link menu-link" href="/" role="button" aria-expanded="false" aria-controls="sidebarDashboards">

            <i class="ri-home-8-line"></i>
            <span data-key="t-dashboards"> {{ $t("t-home") }}</span>
          </a>

        </li>
        <!-- end Dashboard Menu -->
        <li class="nav-item">
          <a class="nav-link menu-link" href="#collection-management" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarApps">
            <i class="bx bxs-collection"></i>
            <span data-key="t-apps"> {{ $t("t-collection-management") }}</span>
          </a>

          <div class="collapse menu-dropdown" id="collection-management">
            <ul class="nav nav-sm flex-column">

              <li class="nav-item">
                <router-link to="/collection/payment" class="nav-link" data-key="t-payment-chanel">
                  {{ $t("t-payment-chanel") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/collection/benficiary-bank" class="nav-link" data-key="t-beneficiary-bank">
                  {{ $t("t-beneficiary-bank") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/collection/bank-script" class="nav-link" data-key="t-bank-script">
                  {{ $t("t-bank-script") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/collection/bank-card-management" class="nav-link" data-key="t-bank-card-management">
                  {{ $t("t-bank-card-management") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/collection/zalo-management" class="nav-link" data-key="t-zalo-management">
                  {{ $t("t-zalo-management") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/collection/viettelPay-management" class="nav-link" data-key="t-viettelPay-management">
                  {{ $t("t-viettelPay-management") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/collection/momo-management" class="nav-link" data-key="t-Momo-management">
                  {{ $t("t-Momo-management") }}
                </router-link>
              </li>


            </ul>
          </div>


        </li>



        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarMerchant" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarMerchant">
            <i class="bx bx-store-alt"></i>
            <span data-key="t-authentication">{{
              $t("t-merchant-managament")
            }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarMerchant">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="/merchant/merchant-list" class="nav-link" data-key="merchant-list">
                  {{ $t("t-merchant-list") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/merchant/order-list" class="nav-link" data-key="order-list">
                  {{ $t("t-order-list") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/merchant/review-list" class="nav-link" data-key="review-list">
                  {{ $t("t-review-list") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/merchant/internal-charging-list" class="nav-link" data-key="internal-charging-list">
                  {{ $t("t-internal-charging-list") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/merchant/drop-order-list" class="nav-link" data-key="drop-order-list">
                  {{ $t("t-drop-order-list") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/merchant/withdrawn-list" class="nav-link" data-key="withdrawn-list">
                  {{ $t("t-withdrawnal-application-list") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/merchant/callback-record" class="nav-link" data-key="callback-record">
                  {{ $t("t-call-back-record-list") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link menu-link" href="#financial-managemnet" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarPages">
            <i class="mdi mdi-finance"></i>
            <span data-key="t-pages">{{ $t("t-financial-managemnet") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="financial-managemnet">
            <ul class="nav nav-sm flex-column">

              <li class="nav-item">
                <router-link to="/financial/reconciliation-daily" class="nav-link" data-key="t-reconciliation-daily">
                  {{ $t("t-reconciliation-daily") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/financial/merchant-channel-report" class="nav-link"
                  data-key="t-merchant-channel-report">
                  {{ $t("t-merchant-channel-report") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/financial/merchant-report" class="nav-link" data-key="t-merchant-report">
                  {{ $t("t-merchant-report") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/financial/bank-card-statement" class="nav-link" data-key="t-bank-card-statement">
                  {{ $t("t-bank-card-statement") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/financial/unknown-income" class="nav-link" data-key="unknown-income">
                  {{ $t("t-unknown-income") }}
                </router-link>
              </li>




            </ul>
          </div>

        </li>

        <li class="nav-item">
          <a class="nav-link" href="#paymentManagement" data-bs-toggle="collapse" role="button" aria-expanded="false"
            aria-controls="sidebarlanding" data-key="t-paymentManagement">
            <i class="bx bx-money-withdraw"></i>
            <span data-key="t-paymentManagement">{{ $t("代付管理") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="paymentManagement">
            <ul class="nav nav-sm flex-column">

              <li class="nav-item">
                <router-link to="/payment/payment-config" class="nav-link" data-key="t-payment-config">
                  {{ $t("代付配置") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/payment/pay-for-order" class="nav-link"
                  data-key="t-pay-for-order">
                  {{ $t("代付订单") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/payment/callback-log" class="nav-link" data-key="t-callback-log">
                  {{ $t("回调记录") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/payment/automatic-script" class="nav-link" data-key="t-automatic-script">
                  {{ $t("自动脚本") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/payment/task-list" class="nav-link" data-key="t-task-list">
                  {{ $t("任务列表") }}
                </router-link>
              </li>




            </ul>
          </div>

        </li>


        <li class="nav-item">
          <a class="nav-link menu-link" href="/account"  role="button" >
            <i class="mdi mdi-account-multiple"></i>
            <span data-key="t-base-ui">{{ $t("账户管理") }}</span>
          </a>
        </li>


        <li class="nav-item">
          <a class="nav-link menu-link" href="#system-managemnet" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarUI">
            <i class="ri-settings-2-line"></i>
            <span data-key="t-base-ui">{{ $t("t-system-management") }}</span>
          </a>

          <div class="collapse menu-dropdown" id="system-managemnet">
            <ul class="nav nav-sm flex-column">

              <li class="nav-item">
                <router-link to="/system/setting" class="nav-link" data-key="t-system-setting">
                  {{ $t("t-system-setting") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/system/operation" class="nav-link" data-key="t-system-operation">
                  {{ $t("t-system-operation") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/system/VPN-list" class="nav-link" data-key="t-VPN-list">
                  {{ $t("t-VPN-list") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/system/export-file" class="nav-link" data-key="t-export-file">
                  {{ $t("t-export-file") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/system/api-request-log" class="nav-link" data-key="api-request-log">
                  {{ $t("t-api-request-log") }}
                </router-link>
              </li>

            </ul>
          </div>

        </li>


            <li class="nav-item">
              <a class="nav-link menu-link" href="#apiExternal" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarAdvanceUI">
            <i class="ri-guide-fill"></i>
            <span data-key="t-advance-ui">{{ $t("接入指南") }}</span>
          </a>

          <div class="collapse menu-dropdown" id="apiExternal">
            <ul class="nav nav-sm flex-column">

              <li class="nav-item">
                <a href="https://pay2world.me/doc/payDoc.html" class="nav-link" target="_blank">
                  {{ $t("代收Api") }}
                </a>
              </li>

              <li class="nav-item">
                <a href="https://pay2world.me/doc/behalfPay.html" class="nav-link" target="_blank">
                  {{ $t("代付Api") }}
                </a>
              </li>
            </ul>
          </div>

            </li>
          
      </ul>
    </template>
  </BContainer>
</template>