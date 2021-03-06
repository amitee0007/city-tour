mapboxgl.accessToken =
  "pk.eyJ1IjoicmFqYW4wMjciLCJhIjoiY2s2b25oYTg1MDJtazNsbXZ4OTFqcnN2cSJ9.MGaLTVPvgOjQazj7ZTX1nQ";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-streets-v11",
  zoom: 20,
  center: [-74.16554152965546, 40.71678983580253],
  maxZoom: 21,
  pitch: 70,
  antialias: !0,
});
map.on("load", () => {
  const e = map
    .getStyle()
    .layers.find((e) => "symbol" === e.type && e.layout["text-field"]).id;
  const t = new deck.MapboxLayer({
    id: "layer-",
    type: deck.IconLayer,
    data: [
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bank",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16553884744644, 40.71707953227454],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "parking",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16544765233994, 40.71733974978518],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "atm",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16450083255768, 40.718198663645545],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bar",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16463494300842, 40.71864285498675],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "school",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16537389159203, 40.718513765360136],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "cafe",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16552007198334, 40.71938384492989],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "atm",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16756257414818, 40.719450930031975],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bank",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16723132133484, 40.719994723439946],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bar",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16701406240462, 40.72036775298455],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "atm",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16615307331085, 40.72037791724805],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "cafe",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16520893573761, 40.71976094364071],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "parking",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16452765464783, 40.719916458120316],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bar",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.1640006005764, 40.719833110535916],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "school",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16439354419708, 40.71923544431238],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bank",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16337832808495, 40.720278307398715],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "atm",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16388392448425, 40.72041857428659],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bar",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16424065828323, 40.720256962411604],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "cafe",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16464433073997, 40.720670647371186],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "atm",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16492864489555, 40.72027729097092],
        },
      },
      {
        type: "Feature",
        properties: {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          type: "bank",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.16426479816437, 40.72053546313402],
        },
      },
    ],
    getPosition: (e) => [...e.geometry.coordinates, 7],
    getElevationValue: (e) => 100,
    getIcon: (e) => ({
      url: e.properties.type + ".jpg",
      width: 1e3,
      height: 1e3,
    }),
    getSize: (e) => 8,
    sizeUnits: "meters",
    pickable: !0,
    onHover: (e) => r(e.object, e.x, e.y),
  });
  popupDiv = document.getElementById("pop");
  let r = (e, t, r) => {
    if (e) {
      (popupDiv.innerHTML = ""),
        Object.keys(e.points[0].source).map((t) => {
          "latitude" !== t &&
            "longitude" !== t &&
            "fillColor" !== t &&
            (popupDiv.innerHTML += `${t} :  ${e.points[0].source[t]} <br>`);
        }),
        (popupDiv.style.display = "block"),
        (popupDiv.style.left = t + "px"),
        (popupDiv.style.top = r + "px"),
        (popupDiv.style.padding = "15px"),
        (popupDiv.style.backgroundColor = "#eeeeee"),
        (popupDiv.style.border = "1px solid #000");
    } else popupDiv.style.display = "none";
  };
  map.addLayer(t),
    map.addLayer(
      {
        id: "add-3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": [
            "match",
            ["get", "height"],
            "#aaaaaa",
            "#aaaaaa",
            "#aaaaaa",
          ],
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "height"],
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "min_height"],
          ],
          "fill-extrusion-opacity": 0.95,
        },
      },
      e
    );
});
const droneFlyPath = {
    geometry: {
      type: "LineString",
      coordinates: [
        [-74.16554152965546, 40.71678983580253],
        [-74.16514992713928, 40.71740175458883],
        [-74.16484415531158, 40.717926251928894],
        [-74.16433453559874, 40.71878210887019],
        [-74.1646134853363, 40.7188878196529],
        [-74.16582584381102, 40.71927813493486],
        [-74.16677534580231, 40.71962779043154],
        [-74.16714549064636, 40.71976196007639],
        [-74.16672170162201, 40.72041654143524],
        [-74.16567027568817, 40.720050627183326],
        [-74.16443645954132, 40.719648119182985],
        [-74.16386783123016, 40.71944889715109],
        [-74.16370153427124, 40.71992052385349],
        [-74.16359424591064, 40.72015633595163],
        [-74.1640904545784, 40.720325063060855],
        [-74.16427284479141, 40.720368769410975],
        [-74.1643238067627, 40.72035250658636],
        [-74.16440427303314, 40.720229518846686],
        [-74.16445925831795, 40.72029863595152],
      ],
    },
  },
  modelOrigin = [-74.16554152965546, 40.71678983580253],
  modelAltitude = 0,
  modelRotate = [0, 0, 0];
let modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
    modelOrigin,
    0
  ),
  modelTransform = {
    translateX: modelAsMercatorCoordinate.x,
    translateY: modelAsMercatorCoordinate.y,
    translateZ: modelAsMercatorCoordinate.z,
    rotateX: modelRotate[0],
    rotateY: modelRotate[1],
    rotateZ: modelRotate[2],
    scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
  };
const THREE = window.THREE;
let i = 0;
const points = droneFlyPath.geometry.coordinates.map((e) => {
  const [t, r] = e;
  return new THREE.Vector3(t, r, 0);
});
let curve = new THREE.CatmullRomCurve3(points),
  cccc = curve.getPoints(2500);
const M3 = new THREE.Matrix3();
let M4 = new THREE.Matrix4(),
  animate = !1,
  iBlue = 0,
  lss = 2501,
  ls = 2500;
const normal = new THREE.Vector3(),
  binormal = new THREE.Vector3(0, 1, 0);
function stopTour() {
  animate = !1;
}
function startTour() {
  animate = !0;
}
const t = [],
  n = [],
  b = [];
for (let e = 0; e < lss; e++)
  (tangent = curve.getTangent(e / ls)),
    t.push(tangent.clone()),
    normal.crossVectors(tangent, binormal),
    (normal.y = 0),
    normal.normalize(),
    n.push(normal.clone()),
    binormal.crossVectors(normal, tangent),
    b.push(binormal.clone());
let modeld;
const customLayer = {
  id: "3d-model",
  type: "custom",
  renderingMode: "3d",
  onAdd: function (e, t) {
    (this.camera = new THREE.Camera()), (this.scene = new THREE.Scene());
    const r = new THREE.DirectionalLight(16777215);
    r.position.set(0, 100, 100), this.scene.add(r);
    const o = new THREE.DirectionalLight(16777215);
    this.scene.add(o),
      new THREE.GLTFLoader().load("./car_gltf/scene.gltf", (e) => {
        e.scenes[0].scale.set(3, 3, 3),
          e.scenes[0].rotation.set(
            -Math.PI / 2,
            Math.PI / 2,
            (2 * Math.PI) / 2
          ),
          (modeld = e.scene),
          this.scene.add(e.scene);
      }),
      (this.map = e),
      (this.renderer = new THREE.WebGLRenderer({
        canvas: e.getCanvas(),
        context: t,
        antialias: !0,
      })),
      (this.renderer.autoClear = !1);
  },
  render: function (e, r) {
    if (animate) {
      (modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
        [cccc[i].x, cccc[i].y],
        0
      )),
        modeld &&
          (iBlue === ls && (iBlue = 0),
          M3.set(
            t[iBlue].x,
            b[iBlue].x,
            n[iBlue].x,
            t[iBlue].y,
            b[iBlue].y,
            n[iBlue].y,
            t[iBlue].z,
            b[iBlue].z,
            n[iBlue].z
          ),
          M4.setFromMatrix3(M3),
          iBlue++);
      const e = {
        translateX: modelAsMercatorCoordinate.x,
        translateY: modelAsMercatorCoordinate.y,
        translateZ: modelAsMercatorCoordinate.z,
        rotateX: modelRotate[0],
        rotateY: modelRotate[1],
        rotateZ: modelRotate[2],
        scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
      };
      (modelTransform = e),
        i < cccc.length - 1 ? i++ : (i = 0),
        map.setCenter([cccc[i].x, cccc[i].y]);
    }
    const o = new THREE.Matrix4().makeRotationAxis(
        new THREE.Vector3(1, 0, 0),
        modelTransform.rotateX
      ),
      a = new THREE.Matrix4().makeRotationAxis(
        new THREE.Vector3(0, 1, 0),
        modelTransform.rotateY
      ),
      m = new THREE.Matrix4().makeRotationAxis(
        new THREE.Vector3(0, 0, 1),
        modelTransform.rotateZ
      ),
      s = new THREE.Matrix4().fromArray(r),
      l = new THREE.Matrix4()
        .makeTranslation(
          modelTransform.translateX,
          modelTransform.translateY,
          modelTransform.translateZ
        )
        .scale(
          new THREE.Vector3(
            modelTransform.scale,
            -modelTransform.scale,
            modelTransform.scale
          )
        )
        .multiply(M4 || o)
        .multiply(a)
        .multiply(m);
    (this.camera.projectionMatrix = s.multiply(l)),
      this.renderer.resetState(),
      this.renderer.render(this.scene, this.camera),
      this.map.triggerRepaint();
  },
};
map.on("style.load", () => {
  map.addLayer(customLayer, "waterway-label");
});
