
path = "M23.5,1C35.90654,1,46,11.09346,46,23.5S35.90654,46,23.5,46S1,35.90654,1,23.5S11.09346,1,23.5,1 M23.5,0C10.52131,0,0,10.52131,0,23.5S10.52131,47,23.5,47S47,36.47869,47,23.5S36.47869,0,23.5,0L23.5,0z"
#path = "M23.5,1C35.90654,1,46,11.09346,46,23.5S35.90654,46,23.5,46S1,35.90654,1,23.5S11.09346,1,23.5,1"
#path = "M10 10L20 20"
#path = "M10 10L20 20M20 10L10 20"

view = new ldview root: document.body
view.get('path1')
  ..setAttribute \d, path
  ..setAttribute \stroke, \#000
  ..setAttribute \stroke-width, 5
  ..setAttribute \transform, "translate(20,20)"
view.get('path2')
  ..setAttribute \d, q = cubify.d(path)
  ..setAttribute \stroke, \#000
  ..setAttribute \stroke-width, 5
  ..setAttribute \transform, "translate(20,20)"

paths = path.split(/M/).map -> "M#it"
paths = paths.map (path) ->
  pts = cubify path
  path =
    ty: \sh
    ks: k: {
      c: false
      v: pts.map -> [it.1, -it.2]
      i: pts.map -> [it.3 - it.1, -(it.4 - it.2)]
      o: pts.map -> [it.5 - it.1, -(it.6 - it.2)]
    }


json = {
  nm: "Bouncy Ball", v: "5.5.2", ip: 0, op: 120, fr: 60, w: 100, h: 100,
  layers: [
    * ddd: 0, ty: 4, st: 0, ip: 0, op: 120
      ks: o: {a: 0, k: 100}
      shapes: [
        * ty: \gr
          it: paths ++ [
            #* ty: \fl, r: 1 o: { a: 0, k: 100 }, c: { a: 0, k: [1,0,0] }
            * ty: \st, o: { a: 0, k: 100 }, w: { a: 0, k: 5}, c: { a: 0, k: [1,0,0] }
            * ty: "tr", o: {a: 0, k: 100}, p: a: 0, k: [20, 20]
          ]
      ]
  ]
}


lottie.loadAnimation do
  container: view.get('lottie')
  path: URL.createObjectURL(new Blob([JSON.stringify(json)], {type: "application/json"}))
  render: "svg/canvas/html"
  loop: true
  autoplay: true
  name: "hello world"

