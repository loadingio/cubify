path = "M73,73c8.034,15.268-17.263,19.532-26.958,17.009 c-24.69-6.427-10.134-32.73,12.321-19.933C76.004,80.13,96.66,86.017,117.492,83.071c12.438-1.759,29.009-5.901,20.007-20.927 c-8.91-14.871-25.544-13.859-30.499,0.478c-10.56,30.558-5.415,68.329-7,100.198c-0.425,8.553-1.071,16.389-4.139,24.005 c-4.143,0.3-8.571,0.046-12.735,0.329c1.595,8.234,20.839,8.662,27.478,7.439c10.24-1.886,20.033-11.26,28.122-16.964 c18.15-12.801,36.752-25.173,45.457-46.667c7.107-17.548,6.366-39.568,3.682-58.085c-12.696,12.787-10.067,45.71-10.662,62.745 c-0.534,15.316-0.206,30.664-0.203,45.989c0.08-10.912-3.976-32.302,13.575-30.598c17.011,1.652,10.62,31.944,24.585,40.528 c7.809-9.587,19.201-17.061,25.626-27.675c4.925-8.136,4.204-20.088,14.181-24.207c1.635,2.722,3.981,6.126,5.769,8.36 c-12.318,5.363-15.09,33.654-2.764,40.419c9.409-13.06,10.563-36.484,14.87-52.273c7.044,18.048,9.727,45.125,28.535,55.589 c4.78-13.222-0.843-34.045,7.326-45.197c20.621,2.642,29.092,27.349,38.216,41.918c8.14,12.998,16.46,26.37,30.154,13.782 c23.701-21.784,29.889-59.663,33.164-89.81c2.409-22.167,6.59-44.152,8.781-66.321c2.096,33.377,2.046,67.288,5.98,100.525 c2.151,18.169,10.598,34.686,13.182,52.676c-3.062-27.309-9.533-57.168-6.298-84.642c1.804-15.308,10.729-14.628,16.356,0.498 c1.583,4.254,3.704,12.624,1.231,17.024c-1.451,2.582-6.34,3.262-7.56,5.59c-3.853,7.354-2.517,19.202,1.208,27.535 c14.52,32.479,73.467,19.664,66.125,65.669c-5.882,36.855-87.587,30.328-111.263,31.151c-49.056,1.707-97.751-2.152-146.764-2.433 c-28.5-0.163-56.859,3.1-85.32,4.033c-11.229,0.368-50.101-6.123-55.927,8.158c-5.227,12.815,8.938,33.638,14.071,43.835 c5.144,10.219,10.83,28.145,23.039,31.526c11.888,3.292,26.722-7.133,33.248-16.13c6.903,36.051,58.631,56.272,83.091,23.574 c-1.682,23.365-14.016,45.248-25.518,65.346c-12.529,21.893-30.888,43.774-50.643,59.629c-3.745,3.006-6.553,5.519-11.091,6.852 c-15.341-51.822,43.257-60.341,71.487-85.005c23.565-20.589,51.282-33.989,78.32-49.618c-0.219,11.219-12.96,19.19-11.181,33.053 c3.04,23.688,36.298,32.755,55.908,24.027c50.931-22.669-9.714-74.84-42.542-73.076c30.803-0.416,62.168,1.834,92.8,4.932 c-0.037,11.615,4.768,59.474,24.162,56.767c16.953-2.366,20.561-48.289,19.891-62.136c-0.699,14.443,0.06,27.034,5.032,40.917 c3.687,10.294,13.62,38.117,26.518,41.03c14.757,3.334,33.248-25.763,38.321-34.612C543.181,368.35,549.159,343.805,565,335"

path = "M10 10L 100 10L100 100L10 100Z"
view = new ldview root: document.body
view.get('path1').setAttribute \d, path
view.get('path2').setAttribute \d, cubify.d(path)
