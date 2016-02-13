"use strict";

function gen_society(m0,m,n) {
	var array = []; //array of edges
	var deg = [];	//array of nodes' degrees
	var nodes = [];
	var sum_deg = 0;
	var i = 0;
	for (;i<m0;++i) {
		var node = {"name":"","group":0};;
		node.name="Patient "+i;
		node.group=Math.floor(Math.random()*10);
		nodes.push(node);
		
		deg[i]=0;
		for (var j = 0; j<i;++j) {
			var edge={"source":0,"target":0,"value":1};
			edge.source=i;
			edge.target=j;
			edge.value=1;
			array.push(edge)
			
			++deg[i];
			++deg[j];
			sum_deg+=2;
		}
	}
	//ordinary nodes with m edges
	for (;i<n;++i) {
		var node = {"name":"","group":0};;
		node.name="Patient "+i;
		node.group=Math.floor(Math.random()*10);
		nodes.push(node);
	
		deg[i]=0; //by the end of iteration should be m
		var forbidden = [];
		while (deg[i] < m) {
			var r = Math.random()*sum_deg;
			//weighted rand
			var sum = 0;
			for (var j = 0; j < i; ++j) {
				if (r < sum+deg[j]) {
					if (forbidden.indexOf(j)==-1) {
					
						forbidden.push(j);
						
						var edge={"source":0,"target":0,"value":1};
						edge.source=i;
						edge.target=j;
						edge.value=1;
						
						array.push(edge)
						++deg[i];
						++deg[j];
						sum_deg+=1;
					}
					break;
				}
				sum+=deg[j];
			}
		}
		sum_deg+=m;
	}
	var obj={};
	obj.nodes=nodes;
	obj.links=array;
	obj.deg=deg;
	return obj;
}