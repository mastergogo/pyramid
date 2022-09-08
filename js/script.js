$(document).ready(function () {
  $(".buttonDescription").hide();
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    console.log("mobile browser detected");
  } else {
    $(".pyramid__section").mouseenter(function () {
      if ($("main").width() > 767) {
        let currentElem = $(this).attr("class").split(" ")[1];

        switch (currentElem) {
          case "two":
            $(".buttonDescription").html(`<h4>Pre-built dashboards</h4>
            <ol>
            <li>Use real software</li>
            <li>Excel, Power BI, Tableau, or Google Sheets</li>
            <li>Student opens the pre-built dashboard in the software and uses filters/slicers to analyze</li>
            <li>Instructions for obtaining software included</li>
            <li>10 &ndash; 15 minutes to complete</li>
            </ol>`);
            $(".buttonDescription").fadeIn();
            break;

          case "three":
            $(".buttonDescription").html(`<h4>Pivot tables+ projects</h4>
            <ol>
            <li>Use real software</li>
            <li>Excel, Power BI, Tableau, or Google Sheets</li>
            <li>Students learn to build pivot tables, pivot charts, and more</li>
            <li>30 &ndash; 45 minutes to complete</li>
            </ol>`);
            $(".buttonDescription").fadeIn();
            break;

          case "four":
            $(".buttonDescription").html(`<h4>Build dashboard projects</h4>
            <ol>
           <li>Use real software</li>
            <li>Excel, Power BI, Tableau, or Google Sheets</li>
            <li>Students learn to build pivot tables, pivot charts, and more</li>
            <li>30 &ndash; 45 minutes to complete</li>
            </ol>`);
            $(".buttonDescription").fadeIn();
            break;

          case "five":
            $(".buttonDescription").html(`<h4>ETL projects</h4>
            <ol>
            <li>Quick analytics assignments</li>
            <li>No software needed; web browser only</li>
            <li>10 &ndash; 15 minutes to complete</li>
            </ol>`);
            $(".buttonDescription").fadeIn();
            break;

          default:
            $(".buttonDescription").html(`<h4>Mini-dashboards</h4>
            <ol>
            <li>Quick analytics assignments</li>
            <li>No software needed; web browser only</li>
            <li>10 &ndash; 15 minutes to complete</li>
            </ol>`);
            $(".buttonDescription").fadeIn();
            break;
        }
      } else {
        //  $(".buttonDescription").hide();
      }
    });
    $(".pyramid__section").mouseleave(function () {
      $(".buttonDescription").html("").hide();
    });
    $(".pyramid__section:visible").focus(function () {
      $(".buttonDescription").html("").hide();
      let currentElem = $(this).attr("class").split(" ")[1];

      switch (currentElem) {
        case "two":
          $(".buttonDescription").html(`<h4>Pre-built dashboards</h4>
            <ol>
            <li>Use real software</li>
            <li>Excel, Power BI, Tableau, or Google Sheets</li>
            <li>Student opens the pre-built dashboard in the software and uses filters/slicers to analyze</li>
            <li>Instructions for obtaining software included</li>
            <li>10 &ndash; 15 minutes to complete</li>
            </ol>`);
          $(".buttonDescription").fadeIn();
          break;

        case "three":
          $(".buttonDescription").html(`<h4>Pivot tables+ projects</h4>
            <ol>
            <li>Use real software</li>
            <li>Excel, Power BI, Tableau, or Google Sheets</li>
            <li>Students learn to build pivot tables, pivot charts, and more</li>
            <li>30 &ndash; 45 minutes to complete</li>
            </ol>`);
          $(".buttonDescription").fadeIn();
          break;

        case "four":
          $(".buttonDescription").html(`<h4>Build dashboard projects</h4>
            <ol>
           <li>Use real software</li>
            <li>Excel, Power BI, Tableau, or Google Sheets</li>
            <li>Students learn to build pivot tables, pivot charts, and more</li>
            <li>30 &ndash; 45 minutes to complete</li>
            </ol>`);
          $(".buttonDescription").fadeIn();
          break;

        case "five":
          $(".buttonDescription").html(`<h4>ETL projects</h4>
            <ol>
            <li>Quick analytics assignments</li>
            <li>No software needed; web browser only</li>
            <li>10 &ndash; 15 minutes to complete</li>
            </ol>`);
          $(".buttonDescription").fadeIn();
          break;

        default:
          $(".buttonDescription").html(`<h4>Mini-dashboards</h4>
            <ol>
            <li>Quick analytics assignments</li>
            <li>No software needed; web browser only</li>
            <li>10 &ndash; 15 minutes to complete</li>
            </ol>`);
          $(".buttonDescription").fadeIn();
          break;
      }
    });
  }
});
$(document).on("click keyup", ".pyramid__section", function (e) {
  const key = e.which || e.keyCode;
  if (key === 13 || key === 32 || e.type === "click") {
    let currentElem = $(this).attr("class").split(" ")[1];

    switch (currentElem) {
      case "two":
        window.open(
          "https://mediaplayer.pearsoncmg.com/assets/_video.true/data-analytics-mini-dashboards",
          "",
          "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=368,width=657"
        );
        break;

      case "three":
        window.open(
          "https://mediaplayer.pearsoncmg.com/assets/_video.true/data-analytics-mini-dashboards",
          "",
          "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=368,width=657"
        );
        break;

      case "four":
        window.open(
          "https://mediaplayer.pearsoncmg.com/assets/_video.true/data-analytics-mini-dashboards",
          "",
          "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=368,width=657"
        );
        break;

      case "five":
        window.open(
          "https://mediaplayer.pearsoncmg.com/assets/_video.true/data-analytics-mini-dashboards",
          "",
          "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=368,width=657"
        );
        break;

      default:
        window.open(
          "https://mediaplayer.pearsoncmg.com/assets/_video.true/data-analytics-mini-dashboards",
          "",
          "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=368,width=657"
        );

        break;
    }
  }
});
