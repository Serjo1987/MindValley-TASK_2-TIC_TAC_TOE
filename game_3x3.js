$(document).ready(function() {
	(function() {

		/* setup game field */
		for(var i = 0; i < 9; i++) {
			$('#game').append('<div id="'+i+'"></div>');
		}

		/* data */
		var data         = new Array(9);
		var winner       = null;
		var player_steps = [];

		/* first step is AI */
		data[4] = 'X';
		$('#4').addClass('clicked').html('<i class="symbol x">X</i>');

		/* ai */
		function ai() {
			if(player_steps.length > 0) {
				
				/* startegy 1 */
				if(player_steps[0] === 1) {
					move(0, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 8) {
						move(8, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] == 8) {
						move(6, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 2) {
							move(2, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 3) {
							move(2, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] !== 3) {
							move(3, 'X');
						}
					}
				}

				/* startegy 2 */
				if(player_steps[0] === 3) {
					move(6, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 2) {
						move(2, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] == 2) {
						move(8, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 0) {
							move(0, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 0) {
							move(7, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] !== 7) {
							move(0, 'X');
						}
					}
				}

				/* startegy 3 */
				if(player_steps[0] === 5) {
					move(8, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 0) {
						move(0, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] == 0) {
						move(6, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 2) {
							move(2, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 2) {
							move(7, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] !== 7) {
							move(2, 'X');
						}
					}
				}

				/* startegy 4 */
				if(player_steps[0] === 7) {
					move(2, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 6) {
						move(6, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] == 6) {
						move(0, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 8) {
							move(8, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 8) {
							move(1, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] !== 1) {
							move(8, 'X');
						}
					}
				}

				/* diagonal strategy 1 */
				if(player_steps[0] === 0) {
					move(1, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 7) {
						move(7, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] === 7) {
						move(6, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 2) {
							move(2, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 2) {
							move(8, 'X');
							if(player_steps[3] !== undefined && player_steps[3] !== 3) {
								move(3, 'X');
							} else if(player_steps[3] !== undefined && player_steps[3] === 3) {
								move(5, 'X');
							}
						}
					}
				}

				/* diagonal strategy 2 */
				if(player_steps[0] === 2) {
					move(1, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 7) {
						move(7, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] === 7) {
						move(8, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 0) {
							move(0, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 0) {
							move(6, 'X');
							if(player_steps[3] !== undefined && player_steps[3] !== 5) {
								move(5, 'X');
							} else if(player_steps[3] !== undefined && player_steps[3] === 5) {
								move(3, 'X');
							}
						}
					}
				}

				/* diagonal strategy 3 */
				if(player_steps[0] === 6) {
					move(7, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 1) {
						move(1, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] === 1) {
						move(0, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 8) {
							move(8, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 8) {
							move(2, 'X');
							if(player_steps[3] !== undefined && player_steps[3] !== 3) {
								move(3, 'X');
							} else if(player_steps[3] !== undefined && player_steps[3] === 3) {
								move(5, 'X');
							}
						}
					}
				}

				/* diagonal strategy 4 */
				if(player_steps[0] === 8) {
					move(7, 'X');
					if(player_steps[1] !== undefined && player_steps[1] !== 1) {
						move(1, 'X');
					} else if(player_steps[1] !== undefined && player_steps[1] === 1) {
						move(2, 'X');
						if(player_steps[2] !== undefined && player_steps[2] !== 6) {
							move(6, 'X');
						} else if(player_steps[2] !== undefined && player_steps[2] == 6) {
							move(0, 'X');
							if(player_steps[3] !== undefined && player_steps[3] !== 3) {
								move(3, 'X');
							} else if(player_steps[3] !== undefined && player_steps[3] === 3) {
								move(5, 'X');
							}
						}
					}
				}
			}
		};

		/* player click */
		$('#game div').on('click', function() {
			var _this  = $(this);

			if(!_this.hasClass('clicked')) {
				player_step = parseInt(_this.attr('id'));
				player_steps.push(parseInt(_this.attr('id')));

				move(parseInt(_this.attr('id')), 'O');
			}
		});

		/* click on item */
		function move(id, role) {
			if(data[id]) {
				return false;
			}

			var symbol   = role.toLowerCase();
				data[id] = role;

			$('#' + id).addClass('clicked').html('<i class="symbol '+symbol+'">'+role+'</i>');

			!checkGame() ? (role == 'O') ? ai() : null : reset();
		};

		/* reset game */
		function reset() {
			setTimeout(function() {
				alert('Game ower! Winner is: '+winner+'! The game start after 0.5 seconds.');
				setTimeout(function() {
					location.reload();
				}, 500);
			}, 300);
		};

		/* check game */
		function checkGame() {
			/* horizontal */
			if(
				data[0] === 'X' &&
				data[1] === 'X' &&
				data[2] === 'X'
				||
				data[0] === 'O' &&
				data[1] === 'O' &&
				data[2] === 'O'
			) {
				if(
					data[0] === 'X' &&
					data[1] === 'X' &&
					data[2] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#0').css({ backgroundColor: 'papayawhip' });
				$('#1').css({ backgroundColor: 'papayawhip' });
				$('#2').css({ backgroundColor: 'papayawhip' });
				return true
			};

			if(
				data[3] === 'X' &&
				data[4] === 'X' &&
				data[5] === 'X'
				||
				data[3] === 'O' &&
				data[4] === 'O' &&
				data[5] === 'O'
			) {
				if(
					data[3] === 'X' &&
					data[4] === 'X' &&
					data[5] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#3').css({ backgroundColor: 'papayawhip' });
				$('#4').css({ backgroundColor: 'papayawhip' });
				$('#5').css({ backgroundColor: 'papayawhip' });
				return true;
			};

			if(
				data[6] === 'X' &&
				data[7] === 'X' &&
				data[8] === 'X'
				||
				data[6] === 'O' &&
				data[7] === 'O' &&
				data[8] === 'O'
			) {
				if(
					data[6] === 'X' &&
					data[7] === 'X' &&
					data[8] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#6').css({ backgroundColor: 'papayawhip' });
				$('#7').css({ backgroundColor: 'papayawhip' });
				$('#8').css({ backgroundColor: 'papayawhip' });
				return true;
			};

			/* vertical */
			if(
				data[0] === 'X' &&
				data[3] === 'X' &&
				data[6] === 'X'
				||
				data[0] === 'O' &&
				data[3] === 'O' &&
				data[6] === 'O'
			) {
				if(
					data[0] === 'X' &&
					data[3] === 'X' &&
					data[6] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#0').css({ backgroundColor: 'papayawhip' });
				$('#3').css({ backgroundColor: 'papayawhip' });
				$('#6').css({ backgroundColor: 'papayawhip' });
				return true;
			};

			if(
				data[1] === 'X' &&
				data[4] === 'X' &&
				data[7] === 'X'
				||
				data[1] === 'O' &&
				data[4] === 'O' &&
				data[7] === 'O'
			) {
				if(
					data[1] === 'X' &&
					data[4] === 'X' &&
					data[7] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#1').css({ backgroundColor: 'papayawhip' });
				$('#4').css({ backgroundColor: 'papayawhip' });
				$('#7').css({ backgroundColor: 'papayawhip' });
				return true;
			};

			if(
				data[2] === 'X' &&
				data[5] === 'X' &&
				data[8] === 'X'
				||
				data[2] === 'O' &&
				data[5] === 'O' &&
				data[8] === 'O'
			) {
				if(
					data[2] === 'X' &&
					data[5] === 'X' &&
					data[8] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#2').css({ backgroundColor: 'papayawhip' });
				$('#5').css({ backgroundColor: 'papayawhip' });
				$('#8').css({ backgroundColor: 'papayawhip' });
				return true;
			};

			/* diagonal */
			if(
				data[0] === 'X' &&
				data[4] === 'X' &&
				data[8] === 'X'
				||
				data[0] === 'O' &&
				data[4] === 'O' &&
				data[8] === 'O'
			) {
				if(
					data[0] === 'X' &&
					data[4] === 'X' &&
					data[8] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#0').css({ backgroundColor: 'papayawhip' });
				$('#4').css({ backgroundColor: 'papayawhip' });
				$('#8').css({ backgroundColor: 'papayawhip' });
				return true;
			};

			if(
				data[2] === 'X' &&
				data[4] === 'X' &&
				data[6] === 'X'
				||
				data[2] === 'O' &&
				data[4] === 'O' &&
				data[6] === 'O'
			) {
				if(
					data[2] === 'X' &&
					data[4] === 'X' &&
					data[6] === 'X'
				) {
					winner = "AI";
				} else {
					winner = "Player";
				}
				$('#2').css({ backgroundColor: 'papayawhip' });
				$('#4').css({ backgroundColor: 'papayawhip' });
				$('#6').css({ backgroundColor: 'papayawhip' });
				return true;
			};

			/* all playground */
			if(
				data[0] &&
				data[1] &&
				data[2] &&
				data[3] &&
				data[4] &&
				data[5] &&
				data[6] &&
				data[7] &&
				data[8]
			) {
				winner = "Draw!";
				return true;
			};
		};

	})();
});