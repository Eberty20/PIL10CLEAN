var dateStamp = new Array();
			setInterval(function() {
				var d = new Date();
				document.getElementById('display').innerHTML =
					String(d.getDate()).padStart(2, '0') + '/' +
					String((d.getMonth() + 1)).padStart(2, '0') + '/' +
					d.getFullYear() + ' ' +
					String(d.getHours()).padStart(2, '0') + ':' +
					String(d.getMinutes()).padStart(2, '0') + ':' +
					String(d.getSeconds()).padStart(2, '0');
			}, 1000);

			function check() {
				var tb = document.querySelectorAll('#historic tbody');
				var tr = document.createElement('tr');
				var td = document.createElement('td');
				td.textContent = document.getElementById('display').innerText;
				if (document.getElementById('obs').value != '') {
					var a = document.createElement('a');
					a.textContent = String.fromCodePoint(128206);
					a.addEventListener('click', obs);
					td.appendChild(a);
				}
				tr.appendChild(td);
				tb[0].appendChild(tr);

				if (document.getElementById('obs').value != '') {
					var tr = document.createElement('tr');
					var td = document.createElement('td');
					td.textContent = document.getElementById('obs').value;
					tr.appendChild(td);
					tr.className = 'obs';
					tr.style.display = 'none';
					tb[0].appendChild(tr);
				}

				dateStamp.push({
					data: document.getElementById('display').innerText,
					obs: document.getElementById('obs').value
				});
				document.getElementById('obs').value = '';

				window.localStorage.setItem('dateStamp', JSON.stringify(dateStamp));
			}

			function obs(e) {
				var tr = e.target.parentNode.parentNode
				var tb = tr.parentNode;
				tb.childNodes[(indexInParent(tr) + 1)].style.display = (tb.childNodes[(indexInParent(tr) + 1)].style.display == 'none') ? 'block' : 'none';
			}

			function indexInParent(node) {
				var children = node.parentNode.childNodes;
				var num = 0;
				for (var i = 0; i < children.length; i++) {
					if (children[i]==node) {
						return num;
					}
         			if (children[i].nodeType==1) {
						num++;
					}
				}
				return -1;
			}

			if (typeof(Storage) == 'undefined') {
				document.getElementById('error').innerHTML = 'Seu navegador não consegue salvar os dados, para conseguir usar o app, não feche essa aba.';
				document.getElementById('error').style.display = 'inline-block';
			} else {
				var tb = document.querySelectorAll('#historic tbody');
				var dateStamp = JSON.parse(window.localStorage.getItem('dateStamp'));

				for (var i = 0; i <= (dateStamp.length - 1); i++) {
					var tr = document.createElement('tr');
					var td = document.createElement('td');
					td.textContent = dateStamp[i].data;
					if (dateStamp[i].obs != '') {
						var a = document.createElement('a');
						a.textContent = String.fromCodePoint(128206);
						a.className = 'showObs';
						a.addEventListener('click', obs);
						td.appendChild(a);
					}
					tr.appendChild(td);
					tb[0].appendChild(tr);

					if (dateStamp[i].obs != '') {
						var tr = document.createElement('tr');
						var td = document.createElement('td');
						td.textContent = dateStamp[i].obs;
						tr.appendChild(td);
						tr.className = 'obs';
						tr.style.display = 'none';
						tb[0].appendChild(tr);
					}
				}
			}