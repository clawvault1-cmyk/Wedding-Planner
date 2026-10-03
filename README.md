# Table Binder

A single static page for the Wedding Day Binder: PDF pages for the week of the wedding, not a planning journal.

The page is the offer. It does not take card numbers.

The pictures are original files in `images/`: `binder-cover.png` is the week-of page, and `binder-on-table.jpg` is that page on a kitchen table with a pen. `images/cover.html` is the source for the cover, not a second store page.

## Open the page

From this folder, start a static server:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080/](http://localhost:8080/).

Opening `index.html` directly in a browser works as well. Fonts, styles, and `checkout.config.js` are all local files.

## Add checkout links

Edit `checkout.config.js`. Each product has an empty string. Paste the full `https://` payment link for that file.

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

The three files separately are $76. The Wedding Day Binder is all three for $67. Both binder buttons use `weddingDayBinder`.

Leave a string empty and that button stays on this page. Only `http://` and `https://` links are treated as checkout.

## Publish

`.nojekyll` is included so the folder can be served as plain static files (including GitHub Pages) without Jekyll.
