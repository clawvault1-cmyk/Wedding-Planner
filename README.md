# Table Binder

A single static page for the Wedding Day Binder: a print-at-home PDF for the week of the wedding, not a full planner.

The page does not take card numbers.

The pictures are sample pages for one fictional Saturday, set in `images/src/` and rendered to PNG. `images/on-table.jpg` is that Saturday page on a bare table with a pen.

## Open the page

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080/](http://localhost:8080/).

Opening `index.html` in a browser also works.

## Add checkout links

Edit `checkout.config.js`. Paste a full `https://` link, or leave the string empty. An empty string keeps that button on this page. Only `http://` and `https://` links are used.

```js
window.CHECKOUT_URLS = {
  weddingDayBinder: "",
  dayOfTimeline: "",
  vendorPaymentSheet: "",
  whosInChargeCard: ""
};
```

| Key | File | Price |
| --- | --- | --- |
| `weddingDayBinder` | Wedding Day Binder | $67 |
| `dayOfTimeline` | Day-of Timeline | $27 |
| `vendorPaymentSheet` | Vendor & Payment Sheet | $27 |
| `whosInChargeCard` | Who's in Charge Card | $22 |

The three files alone are $76. Every “Get the binder” button uses `weddingDayBinder`.

## Publish

`.nojekyll` is included so the folder can be served as plain static files, including GitHub Pages, without Jekyll.
